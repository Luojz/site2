import React from 'react';
import '../index.less';

interface IProps {
    data:{
        content:{
            title:string;
            raw:{
                entityMap:{};
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
       title:string;
    }
}

export default (props:IProps) => {

    const data = props.data;
    return (
        <div className="instance-child">
            <p>{data.title}</p>
            <ul className="instance-child-desc">
                {
                    data.content.raw.blocks.map((child,index)=>{
                        return (
                            <li key={index}>{child.text}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
