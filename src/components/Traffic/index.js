import * as React from "react";
import "./index.less";
import mock from './mock.js';

export default ({ data = mock }) => {
    return (
        <div className='components-trafficPlus'>
            {
                data.list.map(( item, index )=> {
                    return (
                        <div key={index}>
                             <div className='trafficPlus-imgs'>
                                <img src={item["iconUrl"]} />
                            </div>
                            <div className='trafficPlus-tabs'>
                                <h3>{item["title"]}</h3>
                                <p>{item["desc"]}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};
