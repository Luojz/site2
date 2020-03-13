import React, {useState, useEffect} from 'react'
import './index.less'
// import mock from './mock.js'


export default ({data}) => (
    <div className="solution-tabsIndustry-frameWorkIntro">
        <h3>{data.title}</h3>
        <p>{data.content}}</p>
    </div>
)