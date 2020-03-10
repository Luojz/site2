import React, { useState } from 'react';
import './index.less'
import mock from './mock.js'


export default ({ data = mock, current = 0, Slot = React.Fragment }) => {
    const [_current, set_current] = useState(current)

    return (
        <>
            <ul className="tabs">
                {data.map((item, idx) => (
                    <li
                        style={{ width: `${100 / data.length}%` }}
                        className={`tab ${_current == idx ? 'selected' : ''}`}
                        onClick={() => set_current(idx)}
                        key={idx}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
            <Slot data={data[_current].content} />
        </>
    )
}