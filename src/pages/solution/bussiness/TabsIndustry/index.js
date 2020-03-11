import React, {useState, useEffect} from 'react'
import './index.less'
// import mock from './mock.js'
import adapter from './adapter'


export default ({data}) => (
    <div id="solution-tabsIndustry">
        tabsIndustry
        {adapter(data.children).map(({ id, type, Component, data }) => <Component data={data} key={id || type} />)}
    </div>
)