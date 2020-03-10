import React from 'react'
import { scroll } from './helpers.js'
import mock from './mock.js'
import './index.css'


export default ({ data = mock }) => {
    setTimeout(scroll, 0, 'scroll_content')

    return (
        <>
            <ul className="scroll_tit">
                {data.title.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <div className="scroll_content" id="scroll_content">
                <ul>
                    {data.content.map((list, i) => (
                        <li key={i}>
                            {list.map((item, j) => (
                                <span key={j}>{item}</span>
                            ))}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}