import React, { useState, useEffect, useRef } from 'react'
import './index.less'
import Counter, { add, sub } from './Counter'

// hooks：法1
export default ({ count = 0, step = 1, min, max, handleCountChanged }) => {
    const [value, setValue] = useState(count)

    return (
        <div className="counter" >
            <button onClick={() => setValue(value - step)}>-</button>
            <span>{value}</span>
            <button onClick={() => setValue(value + step)}>+</button>
        </div>
    )
}

// hooks：法2
// export default ({ count = 0, step = 1, min, max, handleCountChanged }) => {
//     const [counter, setCounter] = useState({ count, step, min, max })

//     return (
//         <div className="counter" >
//             <button onClick={() => sub(counter, setCounter, handleCountChanged, alert)}>-</button>
//             <span>{counter.count}</span>
//             <button onClick={() => add(counter, setCounter, handleCountChanged, alert)}>+</button>
//         </div>
//     )
// }

// 类写法
// export default class extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             counter: new Counter(props)
//         }
//     }

//     render() {
//         return (
//             <div className="counter" >
//                 <button onClick={() => {
//                     const { counter } = this.state
//                     counter.sub(this.handleCountChanged, alert)
//                     this.setState({ counter })
//                 }}>-</button>
//                 <span>{this.state.counter.count}</span>
//                 <button onClick={() => {
//                     const { counter } = this.state
//                     counter.add(this.handleCountChanged, alert)
//                     this.setState({ counter })
//                 }}>+</button>
//             </div>
//         )
//     }
// }
