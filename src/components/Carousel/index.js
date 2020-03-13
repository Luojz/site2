import React, { useState, useEffect } from 'react'
import './index.less'
import { INTERVAL } from '@/constants/TIME'
import mock from './mock.js'


export default ({ scenes = mock, current = 0, children: Slot }) => {
    const [state, setState] = useState(current)

    setTimeout(() => {
        setState(state < scenes.length - 1 ? state + 1 : 0)
    }, 3 * INTERVAL)

    return (
        <div className="carousel">
            <ul className="scenes">
                {scenes.map((scene, idx) => (
                    <li key={idx} className="scene" style={{ display: state === idx ? 'block' : 'none' }}>
                        <Slot data={scene} />
                    </li>
                ))}
            </ul>

            <ul className="tags">
                {scenes.map((scene, idx) => (
                    <li key={idx} className="tag" style={{ color: state === idx ? 'red' : 'blue' }} onClick={() => setState(idx)}>
                        {idx}
                    </li>
                ))}
            </ul>
        </div>
    )
}