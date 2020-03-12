import React from 'react';
import mock from './mock.js';
import './index.less';

const Function = ({data = mock}) => {

    console.log("Function",data);
    return (
        <div>Function</div>
    )
}

export default Function;