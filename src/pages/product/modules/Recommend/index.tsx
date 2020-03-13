import React from 'react';

import Title from '../../../../components/Title/index';
import mock from './mock.js';
import './index.less';

const Recommend = ({data = mock}) => {

    console.log("recomend",data);
    return (
        <div className="recommend">
            <Title title={data.data.title} />
            <ul>
                {
                    data.data.list.map((item,index)=>{
                        return (
                            <li key={index}>
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

export default Recommend;