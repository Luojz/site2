import React from 'react';
import mock from './mock.js';
import './index.less';

const SceneContent = ({data = mock}) => {

    console.log(data);
    return (
        <div>SceneContent</div>
    )
}

export default SceneContent;