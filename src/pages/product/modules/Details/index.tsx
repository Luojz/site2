import React from 'react';
import mock from './mock.js';
import './index.less';

const Details = ({data = mock}) => {

    console.log(data);
    return (
        <div>Details</div>
    )
}

export default Details;