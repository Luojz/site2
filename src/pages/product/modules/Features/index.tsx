import React from 'react';
import mock from './mock.js';
import './index.less';

const Features = ({data = mock}) => {

    console.log(data);
    return (
        <div>Features</div>
    )
}

export default Features;