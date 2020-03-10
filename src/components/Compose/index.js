import React from 'react';
import Hello from '../Hello/container'


export default function Compose({ name, enthusiasmLevel = 1, onIncrement, onDecrement }) {
    if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <div className="hello">
            <div className="greeting">
                {/* Hello {name + getExclamationMarks(enthusiasmLevel)} */}
            </div>
            <Hello
                state={{
                    enthusiasmLevel: 10,
                    languageName: 'TypeScript',
                    name: "15"
                }}
            />
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}