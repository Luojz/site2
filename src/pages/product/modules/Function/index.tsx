import React from 'react';

import Title from '../../../../components/Title/index';
import mock from './mock.js';
import './index.less';

const Function = ({data = mock}) => {

    console.log("Function",data);
    return (
        <div className="function">
            <Title title={data.data.title} />
            <ul className="function-list">
                {
                    data.data.feature.list.map((item,index)=>{
                        return (
                            <li key={index}>
                                <div className="function-hd">
                                    <img src={item.iconUrl} alt=""/>
                                    <div>
                                        <p>{item.title}</p>
                                        <div>
                                            {item.desc.blocks[0].text}
                                        </div>
                                    </div>
                                    <i>></i>
                                </div>
                                <div className="function-bd">
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