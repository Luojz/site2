import React, {useState, useEffect} from 'react'
import './index.less'
import mock from './mock.js'


export default ({ data = mock }) => (
    <div id="solution-protocolHTML">
      <h3>{data.title}</h3>
			<p>{data.content}</p>
    </div>
)