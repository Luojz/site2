import React from 'react'
import './index.less'
import mock from './mock.js'


export default ({ data = mock }) => (
    <div id="solution-protocolHTML">
      <h3>{data.title}</h3>
			<p dangerouslySetInnerHTML={{__html:data.content}}></p>
    </div>
)