import React from 'react'
import './index.less'


export default ({data}) => (
    <div className="solution-tabsIndustry-frameWorkIntro">
        <h3>{data.title}</h3>
        <p>{data.content}</p>
    </div>
)