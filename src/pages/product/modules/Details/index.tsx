import React from 'react';
import mock from './mock.js';
import './index.less';

const Details = ({data = mock}) => {

    console.log(data);
    return (
        <div>产品信息</div>
    )
}

export default Details;