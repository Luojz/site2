import React, {useState, useEffect} from 'react'
import './index.less'
import mock from './mock.js'


export default ({ data = mock }) => (
    <div id="solution-banner">
				<div className="solution-banner-inner">
					<h1 className="solution-banner-tit">{data.title}</h1>
					<div className="solution-banner-des">
						<p>{data.desc}</p>
					</div>
					<a href={`${data.btn1Url}`}>{data.btn1Title}</a>
				</div>
    </div>
)