import React from "react";
import "./index.less";
import {protocol} from '@/config/apis'

export default ({ data }) => (
  <section id="solution-caseSituation">
    <h3>{data.title}</h3>
    <ul>
      {data.list.map(({ title, desc, iconUrl }) => (
        <li key={title}>
          <img src={`${protocol}${iconUrl}`} />
          <h3>{title}</h3>
          <p>{desc}</p>
        </li>
      ))}
    </ul>
  </section>
);
