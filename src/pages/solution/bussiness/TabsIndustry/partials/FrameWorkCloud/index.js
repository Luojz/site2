import React, { useState, useRef, useEffect } from 'react'
import './index.less'
import Icon from '@/components/Icon'
import {protocol} from '@/config/apis'


function List({ data }) {
    const [fold, setFold] = useState(false)
    console.log('222',data.list.length)
    return (
        <ul>
            {data.list.map(({iconUrl, title, moreUrl},idx) => (
                <li key={idx} style={{ display: idx < 4 || fold ? 'block' : 'none' }}>
                    <a href={`${protocol}${moreUrl}`}>
                        <img src={`${protocol}${iconUrl}`} />
                        <span>{title}</span>
                    </a>
                </li>
            ))}
            <span onClick={() => setFold(true)} style={{ display: data.list.length > 3 && !fold ? '' : 'none' }}>更多产品</span>
        </ul>
    )
}
export default ({data}) => (
    <div className="solution-tabsIndustry-frameWorkCloud">
        <h3 className="title">{data.title}</h3>
        <List data={data}/>
    </div>
)