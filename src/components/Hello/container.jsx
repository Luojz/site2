// import React from 'react';
import { container } from '@/helpers'
import component from './index';
import reducer from './reducer'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from './constants'


const actions = {
    onIncrement: { type: INCREMENT_ENTHUSIASM },
    onDecrement: { type: DECREMENT_ENTHUSIASM }
}

export default container(component, reducer, actions)