import React, { useState, useEffect } from 'react'
import './index.less'


export default ({ data, children: Slot }) => {
    const [current, setCurrent] = useState(-1)

    return (
        <ul className="collapse">
            {data.map(({ summary, content }, idx) => (
                <li key={idx} onClick={() => setTimeout(setCurrent, 0, idx)}>
                    <details open={current === idx ? 'open' : ''}>
                        <summary className="collapse-summary">
                            <Slot name="summary" data={summary} />
                        </summary>
                        <div className="collapse-content">
                            <Slot name="content" data={content} />
                        </div>
                    </details>
                </li>
            ))}
        </ul>
    )
}
