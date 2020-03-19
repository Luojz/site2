import React from 'react';

import Title from '../../../../components/Title/index';
import './index.less';

interface IProps {
    data:{
        title:string;
        list:{
            title:string;
            imgUrl:string;
            linkUrl:string;
            key:number;
        }[];
    }
}

export default (props:IProps) => {

    const data = props.data;

    return (
        <div className="recommend">
            <Title title={data.title} />
            <ul>
                {
                    data.list.map((item,index)=>{
                        return (
                            <li key={index} style={{"flex":`0 0 ${ data.list.length > 4 ? 25 : 1/data.list.length*100}%`}}>
                                <a href={item.linkUrl}>
                                    <img src={item.imgUrl} alt=""/>
                                    <p>{item.title}</p>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}