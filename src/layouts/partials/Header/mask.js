import React, { useState } from 'react'
import './index.less'

export default (props) => {
    return (
        <div className="c-nav-mask" id="qcGlobalMask" style={{display:props.isShow == true ? 'block':'none'}}>
        </div>
    )
}