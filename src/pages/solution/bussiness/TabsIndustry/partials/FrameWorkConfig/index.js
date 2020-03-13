import React, { useState, useEffect } from "react";
import "./index.less";
// import mock from './mock.js'

export default ({ data }) => (
  <div className="solution-tabsIndustry-frameWorkConfig">
    <h3>{data.title}</h3>
    <ul>
      {data.list.map(({title, desc}) => (
        <li key={title}>
          <h4>{title}</h4>
          <p>{desc}</p>
        </li>
      ))}
    </ul>
  </div>
);
