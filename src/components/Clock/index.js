import React from 'react'
import DrawClock from './DrawClock.js'


export default ({ width, height = width }) => {
    setTimeout(() => {
        new DrawClock(document.getElementById("clock"))
    })

    return <canvas id="clock" width={width} height={height} />
}