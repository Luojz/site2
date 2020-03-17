import React, { useState } from 'react';

import Title from '../../../../components/Title/index';
import SceneContent from './SceneContent';
import mock from './mock.js';
import './index.less';

const Scene = ({data = mock}) => {

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
            <Title title={data.data.title} />
            <ul className="scene-list">
                {
                    data.data.tabs && data.data.tabs.map((item,index)=>{
                        return (
                            <li key={index} style={{"borderBottom":index===showId && isShow ? "0":".02rem solid #e6e7ec"}} onClick={()=>show(index)}>
                                <div className="scene-hd">
                                    <p style={{"color":index===showId && isShow ?"#2f88ff":"#9094A5"}}>{item.name}</p>
                                    <i className={index===showId && isShow ?"showIntro":"closeIntro"}></i>
                                </div>
                                <div className="scene-bd" style={{"display":index===showId && isShow ?"block":"none"}} onClick={(e)=>e.stopPropagation()}>
                                    {
                                        data.panels &&
                                        <SceneContent data={data.panels.filter(panels=>panels.id===item.panelId)} />
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

export default Scene;