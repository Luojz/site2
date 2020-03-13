import React, {useState, useEffect} from 'react'
import './index.less'
// import mock from './mock.js'
import Icon from '../../../../../../components/Icon'


export default ({data}) => (
    <div className="solution-tabsIndustry-frameWorkCloud">
        <h3 className="title">{data.title}</h3>
        <ul>
            {data.list.map(({iconUrl, title, moreUrl}) => (
                <li key={title}>
                    <a href={moreUrl}>
                        <Icon src={iconUrl}></Icon>
                        <span>{title}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
)