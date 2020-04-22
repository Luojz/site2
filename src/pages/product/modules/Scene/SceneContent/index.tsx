import React from 'react';
import { replace } from '../../../../../utils/URL';
import '../index.less';

interface IProps {
    data:{
        content:{
            raw:{
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
            }
        };
        relation?:{
            list:{
                iconUrl:string;
                linkText:string;
                linkUrl:string;
            }[]
        };
    }
}

export default (props:IProps) => {

    const blocks = props.data.content.raw.blocks;
    
    const list = props.data.relation ? props.data.relation.list : [];
    return (
        <div className="scene-content">
            {
                blocks.length > 0 &&
                blocks.map((item,index)=>{
                    if(item.type==="header-three"){
                        return (
                            <p className="header-three" key={index}>
                                {item.text}
                            </p>
                        )
                    }
                    if(item.type==="unstyled"){
                        return (
                            <div className="unstyled" key={index}>
                                {item.text}
                            </div>
                        )
                    }
                })
            }
            {
                list.length > 0 &&
                <>
                    <p className="header-three">相关产品推荐</p>
                    <ul className="scene-content-relation">
                        {
                            list.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <a href={replace(item.linkUrl)}>
                                            <img src={item.iconUrl} alt=""/>
                                            {item.linkText}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            }
        </div>
    )
}