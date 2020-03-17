import React from "react";
import TrafficPlugs from '../../../../components/Traffic/index';
import './index.less'
import mock from './mock.js'

export default ({ data = mock }) => {
    console.log("@业务调整:", data)
    return (
        <div className='bussiness-traffic'>
            <div className='traffic-top'>
                <h3>{data.title}</h3>
            </div>
            <div className='traffic-plugs'>
                <TrafficPlugs data={data} />
            </div>
        </div>
    )
}