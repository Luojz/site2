
import React, { useState, useEffect, useRef } from 'react'
import './index.less'
import Timer, { play } from "./Timer";


export default ({ time = 0, status = 'stoped' }) => {
    // const [timer, setTimer] = useState({ time, status })
    const timerRef = useRef(new Timer({time, status}))
    const timer = timerRef.current
    console.log(timer)
    console.log(typeof timer.start)

    return (
        <div className="timer">
            <button
                className="btn_default"
                style={{ display: timer.status === 'stoped' ? 'inline-block' : 'none' }}
                onClick={timer.start()}
            >开始</button>
            <button
                className="btn_info"
                style={{ display: timer.status === 'continue' ? 'inline-block' : 'none' }}
                onClick={() => timer.pause()}
            >暂停</button>
            <button
                className="btn_default"
                style={{ display: timer.status === 'paused' ? 'inline-block' : 'none' }}
                onClick={() => timer.continue()}
            >继续</button >
            <button
                className="btn_warn"
                onClick={() => timer.stop()}
            >停止</button>
            <span id="timer-time">{timer.time}</span>
        </div >
    )
}

// export default ({ time = 0, status = 'stoped' }) => {
//     const [timer, setTimer] = useState({ time, status })
//     // useEffect(() => {
//     //     setTimer(new Timer(timer))
//     // }, [timer])
    
//     return (
//         <div className="timer">
//             <button
//                 className="btn_default"
//                 style={{ display: timer.status === 'stoped' ? 'inline-block' : 'none' }}
//                 onClick={() => play('start', timer, setTimer)}
//             >开始</button>
//             <button
//                 className="btn_info"
//                 style={{ display: timer.status === 'continue' ? 'inline-block' : 'none' }}
//                 onClick={() => play('pause', timer, setTimer)}
//             >暂停</button>
//             <button
//                 className="btn_default"
//                 style={{ display: timer.status === 'paused' ? 'inline-block' : 'none' }}
//                 onClick={() => play('continue', timer, setTimer)}
//             >继续</button >
//             <button
//                 className="btn_warn"
//                 onClick={() => play('stop', timer, setTimer)}
//             >停止</button>
//             <span>{timer.time}</span>
//         </div >
//     )
// }