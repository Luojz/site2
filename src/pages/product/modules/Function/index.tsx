import React, { useState } from 'react';

import Title from '../../../../components/Title/index';
import './index.less';

interface IProps {
    data:{
        title:string;
        feature:{
            list:{
                iconUrl:string;
                title:string;
                desc:{
                    entityMap:object;
                    blocks:{
                        key:string;
                        text:string;
                        type:string;
                        depth:number;
                        inlineStyleRanges:Array<any>;
                        entityRanges:Array<any>;
                        data:object;
                    }[];
                };
                linkText:string;
            }[]
        };
        announcement:{
            list:{
                title:string;
                cTitle:string;
                desc:{
                    entityMap:object;
                    blocks:{
                        key:string;
                        text:string;
                        type:string;
                        depth:number;
                        inlineStyleRanges:Array<any>;
                        entityRanges:Array<any>;
                        data:object;
                    }[];
                };
            }[]
        };
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
        <div className="function">
            <Title title={data.title} />
            <ul className="function-list">
                {
                    data.feature.list.map((item,index)=>{
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
                                            data.announcement.list.filter(child=>child.title===item.linkText).length > 0 &&
                                            data.announcement.list.filter(child=>child.title===item.linkText).map((item,index)=>{
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