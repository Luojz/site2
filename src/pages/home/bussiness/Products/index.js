import React, { useState, useRef, useEffect } from 'react'
import Headline from '../../../../components/Headline'
import { cutStr } from '../../../../utils/String'
import './index.less'
import mock from './mock.js'
import purchase from './purchase'
import { protocol } from '../../../../config/apis'


function Parent({ iconUrl, title }) {
    return (
        <summary>
            <img src={`${protocol}${iconUrl}`} alt="" />
            <span>{title} </span>
            <div />
        </summary>
    )
}

function Children({ children }) {
    const [fold, setFold] = useState(false)

    return (
        <ul className="content">
            {children.map(({ title, desc, link, goTitle, goLink }, idx) => (
                <li key={idx}
                    style={{ display: idx < 3 || fold ? 'block' : 'none' }} >
                    <h3>{title}</h3>
                    <p>
                        <span>{cutStr(desc, 24, '...')}</span>
                        <a href={`${protocol}${link}`}>详情</a>
                    </p>
                    <a href={`${protocol}${goLink || purchase[link]}`}>{goTitle || '立即申请'}</a>
                </li>
            ))}
            <span onClick={() => setFold(true)} style={{ display: children.length > 3 && !fold ? '' : 'none' }}>更多产品</span>
        </ul>
    )
}

function Item({ data, open }) {
    return (
        <details open={open}>
            <Parent iconUrl={open ? data.iconHoverUrl : data.iconUrl} title={data.title} />
            <Children children={data.children} />
        </details>
    )
}

function List({ data }) {
    const [current, setCurrent] = useState(0)

    // useEffect(() => {
    //     document.getElementById(`products$ { current }`).scrollIntoView()
    // }, [current])

    return (
        <ul>
            {data.list.map((item, idx) => (
                <li
                    id={`products${idx}`}
                    key={idx}
                    onClick={(e) => {
                        if (idx !== current) {
                            setTimeout(setCurrent, 0, idx)
                        }
                    }}
                >
                    <Item data={item} open={current === idx ? 'open' : ''} />
                </li>
            ))}
        </ul>
    )
}


export default ({ data = mock }) => (
    <section id="home-products">
        <Headline data={data} />
        <List data={data} />
    </section>
)