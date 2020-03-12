import React from 'react';
import mock from './mock.js';
import './index.less';

const InstanceTypeChild = ({data = mock}) => {

    console.log(data);
    return (
        <div>InstanceTypeChild</div>
    )
}

export default InstanceTypeChild;