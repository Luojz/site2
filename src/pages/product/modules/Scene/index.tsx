import React from 'react';
import mock from './mock.js';
import './index.less';

const Scene = ({data = mock}) => {

    console.log(data);
    return (
        <div>Scene</div>
    )
}

export default Scene;