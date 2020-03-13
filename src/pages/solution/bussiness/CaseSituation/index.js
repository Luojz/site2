import React, { useState, useEffect } from "react";
import "./index.less";
// import mock from './mock.js'
import Icon from '../../../../components/Icon'

export default ({ data }) => (
  <ul id="solution-caseSituation">
    <h3>{data.title}</h3>
    <ul>
      {data.list.map(({ title, desc, iconUrl }) => (
        <li>
          <Icon src={iconUrl} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </li>
      ))}
    </ul>
  </ul>
);
