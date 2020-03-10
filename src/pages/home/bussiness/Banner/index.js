import React from 'react'
import BannerPlugs from '../../../../components/Banner';
import './index.less'
import mock from './mock.js'


export default ({ data = mock }) => {
    return (
        <div id='home-banner'>
            <BannerPlugs data={data} />
        </div>
    )
}