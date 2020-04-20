import React, { useState, useEffect } from 'react'
import './index.less'
import Mask from '../Mask'
import Icon from '../Icon'
import mock from './mock.js'


function MenuItem({ data, open }) {
    return (
        <details open={open}>
            <summary>
                <a href={data.link || 'javascript:;'}>{data.title}</a>
                <i className="icon-arrow" />
            </summary>
            <List data={data.children} />
        </details>
    )
}

function List({ data }) {
    const [current, setCurrent] = useState(-1)

    return (
        <ul>
            {data.map((menuItem, idx) => (
                <li key={idx} onClick={() => setTimeout(setCurrent, 0, idx)}>
                    {menuItem.children && menuItem.children.length > 0
                        ? <MenuItem data={menuItem} open={current === idx ? 'open' : ''} />
                        : <a href={menuItem.link || 'javascript:;'}>{menuItem.title}</a>
                    }
                </li>
            ))}
        </ul>
    )
}


export default ({ data = mock }) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <button onClick={() => setShow(true)}>
                <Icon src="/icons/menu.png" />
            </button>
            <Mask show={show}>
                {() => (
                    <menu>
                        <h3>
                            <a href="/">首页</a>
                            <span onClick={() => setShow(false)}>X</span>
                        </h3>
                        <List data={data} />
                    </menu>
                )}
            </Mask>
        </>
    )
}