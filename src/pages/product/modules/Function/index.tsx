import React, { useState } from 'react';

import Title from '../../../../components/Title/index';
import mock from './mock.js';
import './index.less';

const Function = ({data = mock}) => {

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
        <div className="function">
            <Title title={data.data.title} />
            <ul className="function-list">
                {
                    data.data.feature.list.map((item,index)=>{
                        return (
                            <li key={index} style={{"borderBottom":index===showId && isShow ? "0":".02rem solid #e6e7ec"}} onClick={()=>show(index)}>
                                <div className="function-hd">
                                    <img src={item.iconUrl} alt=""/>
                                    <div>
                                        <p>{item.title}</p>
                                        <div>
                                            {item.desc.blocks[0].text}
                                        </div>
                                    </div>
                                    <i className={index===showId && isShow ?"showIntro":"closeIntro"}></i>
                                </div>
                                
                                <div className="function-bd" style={{"display":index===showId && isShow ?"block":"none"}} onClick={(e)=>e.stopPropagation()}>
                                    <ul>
                                        {
                                            data.data.announcement.list.filter(child=>child.title===item.linkText).map((item,index)=>{
                                                return (
                                                    <li key={index}>
                                                        <p>{item.cTitle}</p>
                                                        <div>{item.desc.blocks[0].text}</div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                   
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Function;