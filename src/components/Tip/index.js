import React, { useState, useEffect } from 'react'
import { INTERVAL } from '@/constants/TIME.js'
import './index.less'


export default ({ type, info, interval = INTERVAL }) => {
    const [show, setShow] = useState(true)

    const tid = setTimeout(() => {
        if (show) {
            setShow(!show)
        } else {
            clearTimeout(tid)
        }
    }, interval)

    return (
        <span className={`tip ${type || ''}`} style={{ display: show ? 'inline-block' : 'none' }}>{info}</span>
    )
}
