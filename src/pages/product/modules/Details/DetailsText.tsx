import React from 'react';
import mock from './mock.js';
import './index.less';

const DetailsText = ({data = mock}) => {

    console.log(data);
    return (
        <div>DetailsText</div>
    )
}

export default DetailsText;