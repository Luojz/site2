import React from 'react';
import { connect, Provider } from 'react-redux';


export function commit(actions) {
    return (dispatch) => {
        const r = {}
        Object.entries(actions).forEach(([method, payload]) => {
            r[method] = () => dispatch(payload)
        })
        return r
    }
}

export function con(component, commit) {
    const setState = (state) => {
        return { ...state }
    }

    return connect(setState, commit)(component);
}

export function container(component, reducer, actions) {
    const Component = con(component, commit(actions))
    return ({ state }) => {
        return (
            <Provider store={reducer(state)}>
                <Component />
            </Provider>
        )
    }
}

// [react根据传参的不同动态注册不同的子组件](https://www.cnblogs.com/tnnyang/p/10949017.html)
export async function register(component) {
    return await import(component).then(rawModule => rawModule.default)
}