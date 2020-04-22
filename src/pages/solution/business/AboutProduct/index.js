import React, { useState, useEffect } from "react";
import "./index.less";
import { protocol } from "@/config/apis";
import Icon from "@/components/Icon";
import {replace} from '@/utils/URL'

function List({ data }) {
    const [fold, setFold] = useState(false)
    return (
        <ul style={{ justifyContent:data.list.length>4 ? 'flex-start':'center'}}>
            {data.list.map(({iconUrl, title, moreUrl},idx) => (
                <li key={idx} style={{ display: idx < 8 || fold ? 'block' : 'none', margin:(data.list.length <4 && data.list.length>1)?'0 0.2rem':'0'}}>
                    <a href={replace(`${protocol}${moreUrl}`)}>
                        <img src={`${protocol}${iconUrl}`} />
                        <span>{title}</span>
                    </a>
                </li>
            ))}
            <span onClick={() => setFold(true)} style={{ display: data.list.length > 8 && !fold ? '' : 'none' }}>更多产品</span>
        </ul>
    )
}
export default ({data}) => (
    <div id="solution-aboutProduct">
        <h3>{data.title}</h3>
        <List data={data}/>
    </div>
)
