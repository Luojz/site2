import React from 'react';

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
        }
    }
}

export default (props:IProps) => {

    const list = props.data.content.raw.blocks;
    return (
        <div className="scene-content">
            {
                list.map((item,index)=>{
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
        </div>
    )
}