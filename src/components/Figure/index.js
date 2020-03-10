import React from 'react'
import './index.less'


export default ({ src, desc, width = 'auto' }) => (
    <figure className="figure" style={{width}}>
        <img src={src} />
        <figcaption>{desc}</figcaption>
    </figure>
)
