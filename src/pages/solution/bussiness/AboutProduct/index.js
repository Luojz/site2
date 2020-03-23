import React, { useState, useEffect } from "react";
import "./index.less";
import { protocol } from "@/config/apis";
import Icon from "@/components/Icon";

function List({ data }) {
    const [fold, setFold] = useState(false)
    return (
        <ul>
            {data.list.map(({iconUrl, title, moreUrl},idx) => (
                <li key={idx} style={{ display: idx < 8 || fold ? 'block' : 'none' }}>
                    <a href={`${protocol}${moreUrl}`}>
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
