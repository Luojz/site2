import * as React from 'react'
import { getExclamationMarks } from './helpers'
import './index.less';


export default function Hello({ name, enthusiasmLevel = 10, onIncrement, onDecrement }) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel) + enthusiasmLevel}
            </div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}