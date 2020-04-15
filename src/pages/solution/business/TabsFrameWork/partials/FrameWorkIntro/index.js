import React from 'react'
import './index.less'


export default ({data}) => (
    <div className="solution-tabsFramework-frameWorkIntro">
        <h3>{data.title}</h3>
        <div className="raw-html" dangerouslySetInnerHTML={{__html: data.content}}></div>
    </div>
)
