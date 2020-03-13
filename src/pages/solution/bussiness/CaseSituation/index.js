import React, { useState, useEffect } from "react";
import "./index.less";
// import mock from './mock.js'
import {protocol} from '@/config/apis'

export default ({ data }) => (
  <ul id="solution-caseSituation">
    <h3>{data.title}</h3>
    <ul>
      {data.list.map(({ title, desc, iconUrl }) => (
        <li>
          <img src={`${protocol}${iconUrl}`} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </li>
      ))}
    </ul>
  </ul>
);
