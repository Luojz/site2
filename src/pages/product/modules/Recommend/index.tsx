import React from 'react';
import mock from './mock.js';
import './index.less';

const Recommend = ({data = mock}) => {

    console.log(data);
    return (
        <div>Recommend</div>
    )
}

export default Recommend;