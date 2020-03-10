import React from 'react'
import './index.less'


export default ({ show, children }) => (
    <div
        className="mask"
        style={{ display: show ? 'block' : 'none' }}
    >
        {children}
    </div>
)