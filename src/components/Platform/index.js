import * as React from "react";
import "./index.less";
import mock from './mock.js';

export default ({ data = mock }) => {
    return (
        <div className='components-platformPlus'>
            {
                data.list.map((item, index) => {
                    return <div key={index}>
                        <div className='platformPlus-tabs'>
                            <div className='platformPlus-left'>
                                <img src={item.iconUrl}></img>
                            </div>
                            <div className='platformPlus-right'>
                                <h3>{item["title"]}</h3>
                                <p>{item["desc"]}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
};
