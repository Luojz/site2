import React from 'react'
import './index.less'


export default ({ src, width = '.5rem', height = '.5rem' }) => (
    <i
        className="icon"
        style={{
            backgroundImage: `url(${src})`,
            width,
            height,
        }}
    />
)
