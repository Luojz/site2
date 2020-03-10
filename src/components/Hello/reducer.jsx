import { createStore } from 'redux'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from './constants'


function enthusiasm(state, payload) {
    switch (payload.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}

export default (state) => createStore(enthusiasm, state);