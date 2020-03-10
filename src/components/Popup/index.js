import React, { useState, useEffect } from 'react'
import './index.less'


export default ({ Slot, data }) => {
    return (
        <details className="popup">
            <summary className="popup-control">
                <Slot name="control" />
            </summary>
            <div className="popup-content">
                <Slot name="content" data={data.content} />
            </div>
        </details>
    )
}
