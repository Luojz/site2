import React from 'react';
import mock from './mock.js';
import './index.less';

const InstanceType = ({data = mock}) => {

    console.log(data);
    return (
        <div>InstanceType</div>
    )
}

export default InstanceType;