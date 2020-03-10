import React, { useState, useEffect } from 'react'
import './index.less'


export default ({ data = [] }) => {
    const [list, setList] = useState(data)
    const methods = {
    }

    return (
        <div class="checklist">
            <input type="text" />
            <ul>
                {list.map((item, idx) => (
                    <li key={idx}>
                        <input type="checkbox" />
                        <label>{item}</label>
                    </li>
                ))}
            </ul>
        </div >
    )
}