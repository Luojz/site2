import React, { useState } from 'react';

import Title from '../../../../components/Title/index';
import adapter from './adapter';

import './index.less';

interface IProps {
    data:{
        title:string;
        tabs:{
            name:string;
            panelId:string;
            key:string;
        }[];
        panels:{
            id:string;
            blocks:Array<any>;
        }[];
    }
}

export default (props:IProps) => {

    const data = props.data;

    const [isShow, setIsShow] = useState<Boolean>(true);
    const [showId, setShowId] = useState<Number>(0);

    const show = (clickId:Number) => {
        if(clickId===showId){
            setIsShow(!isShow);
        }else{
            setShowId(clickId);
            setIsShow(true);
        }
    }

    return (
        <div className="scene">
            <Title title={data.title} />
            <ul className="scene-list">
                {
                    data.tabs.length > 0 && data.tabs.map((item,index)=>{
                        return (
                            <li key={index} style={{"borderBottom":index===showId && isShow ? "0":".02rem solid #e6e7ec"}} onClick={()=>show(index)}>
                                <div className="scene-hd">
                                    <p style={{"color":index===showId && isShow ?"#2f88ff":"#9094A5"}}>{item.name}</p>
                                    <i className={index===showId && isShow ?"showIntro":"closeIntro"}></i>
                                </div>
                                <div className="scene-bd" style={{"display":index===showId && isShow ?"block":"none"}} onClick={(e)=>e.stopPropagation()}>
                                    {
                                        data.panels.filter(panels=>panels.id===item.panelId).length > 0 &&
                                        adapter(data.panels.filter(panels=>panels.id===item.panelId)[0]).map(
                                            ({ id, type, Component, data }) => (
                                              <Component data={data} key={id || type} />
                                            )
                                        )
                                    }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}