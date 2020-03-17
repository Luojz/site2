import React from 'react'
import './index.less'
import Icon from '@/components/Icon'
import {protocol} from '@/config/apis'


export default ({data}) => (
    <div className="solution-tabsIndustry-frameWorkCloud">
        <h3 className="title">{data.title}</h3>
        <ul>
            {data.list.map(({iconUrl, title, moreUrl}) => (
                <li key={title}>
                    <a href={`${protocol}${moreUrl}`}>
                        <Icon src={`${protocol}${iconUrl}`}></Icon>
                        <span>{title}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
)