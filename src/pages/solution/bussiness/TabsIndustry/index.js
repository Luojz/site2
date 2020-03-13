import React, { useState, useEffect } from "react";
import "./index.less";
// import mock from './mock.js'
import adapter from "./adapter";
import { protocol } from "../../../../config/apis";

export default ({ data }) => (
  <div id="solution-tabsIndustry">
    <h3>{data.title}</h3>
    <ul>
      {data.tabs.map(({ title, iconUrl }, idx) => (
        <li key={title}>
          <h4>{title}</h4>
          <img src={`${protocol}${iconUrl}`} />
          {adapter(data.children[idx]).map(({ id, type, Component, data }) => (
            <Component data={data} key={id || type} />
          ))}
        </li>
      ))}
    </ul>
  </div>
);
