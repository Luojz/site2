import React, { useState, useEffect } from 'react'
import './index.less'


export default ({ data, Slot, width = '2rem' }) => {
    const [current, setCurrent] = useState(-1)

    return (
        <ul className="drawer">
            {data.map(({ summary, content }, idx) => (
                <li onClick={() => setTimeout(setCurrent, 0, idx)} key={idx}>
                    <details className="drawer-details" open={idx === current ? 'open' : ''}>
                        <summary className="drawer-summary"  style={{ width }}>
                            <Slot name="summary" data={summary} />
                            <i className="icon-arrow" />
                        </summary>
                        <div className="drawer-content" style={{ marginLeft: width }}>
                            <Slot name="content" data={content} />
                        </div>
                    </details>
                </li>
            ))}
        </ul>
    )
}
