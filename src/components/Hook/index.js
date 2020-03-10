import React, { useState, useEffect } from 'react'
import { getExclamationMarks } from './helpers'
import './index.less'


export default ({ data, children }) => {
    const [state, setState] = useState(data)
    const computed = {
        get fullName() {
            if (state.enthusiasmLevel < 3) {
                console.log('enthusiasmLevel must >= 3')
                return state.name + (3 - state.enthusiasmLevel)
            } else {
                return state.name + state.enthusiasmLevel
            }
        }
    }
    const methods = {
        increment() {
            setState({ ...state, enthusiasmLevel: state.enthusiasmLevel + 1 })
        },
        decrement() {
            setState({ ...state, enthusiasmLevel: state.enthusiasmLevel - 1 })
        },
    }
    useEffect(() => console.log(state), [state])
    return (
        <div className="hello">
            <div className="greeting">
                Hello {state.name + getExclamationMarks(state.enthusiasmLevel) + computed.fullName}
            </div>
            <div>
                <button onClick={methods.decrement}>-</button>
                <button onClick={methods.increment}>+</button>
            </div>
            {children}
        </div>
    );
}