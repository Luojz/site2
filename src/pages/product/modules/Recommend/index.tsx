import React from 'react';
import { replace } from '../../../../utils/URL';
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
            <ul style={{ justifyContent:data.list.length>4 ? 'flex-start':'center'}}>
                {
                    data.list.map((item,index)=>{
                        return (
                            <li key={index} style={{ margin:(data.list.length <4 && data.list.length>1)?'0 0.2rem':'0'}}>
                                <a href={replace(item.linkUrl)}>
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