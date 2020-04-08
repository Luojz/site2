import React from 'react'
import './index.less'
import Icon from '@/components/Icon'
import {protocol} from '@/config/apis'
import {replace} from '@/utils/URL'


export default ({data}) => (
    <div className="solution-tabsFramework-frameWorkCloud">
        <h3>{data.title}</h3>
        <ul>
            {data.list.map(({iconUrl, title, moreUrl}) => (
                <li key={title}>
                    <a href={replace(`${protocol}${moreUrl}`)}>
                        <Icon src={`${protocol}${iconUrl}`}></Icon>
                        <span>{title}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
)
