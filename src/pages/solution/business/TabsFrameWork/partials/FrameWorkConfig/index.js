import React from "react";
import "./index.less";


export default ({ data }) => (
  <div className="solution-tabsFramework-frameWorkConfig">
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
