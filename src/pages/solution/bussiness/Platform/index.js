import React from 'react'
import PlatformPlugs from '../../../../components/Platform';
import './index.less'
import mock from './mock.js'


export default ({ data = mock }) => {
    console.log("@平台优势:", data)
    return (
        <div className='bussiness-platform'>
            <div className='platform-top'>
        `       <h3>{data.title}</h3>
            </div>
            <div className='platform-plugs'>
                <PlatformPlugs data={data} />
            </div>
        </div>
    )
}