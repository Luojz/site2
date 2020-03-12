import React from 'react';
import mock from './mock.js';
import './index.less';

const Banner = ({data = mock}) => {
    console.log(data)
    return (
        <div>banner</div>
    )
}

export default Banner;