import React, { useState } from "react";
import "./index.less";
import adapter from "./adapter";
import { protocol } from "@/config/apis";
import Icon from '@/components/Icon'

export default ({ data }) => {
  const [current, setCurrent] = useState(0);
  return (
    <section id="solution-tabsIndustry">
      <h3 className="solution-tabsIndustry-title">{data.title}</h3>
      <ul className="solution-tabsIndustry-container">
        {data.tabs.map(({ title, iconUrl }, idx) => (
          <li key={title}>
            <h4
              className="solution-tabsIndustry-container-summary"
              onClick={() => setCurrent(current === idx ? -1 : idx)}
              style={{color: current === idx ? '#2F88FF' : '#333'}}
            >
              {title}
              <Icon src={current === idx ? '/icons/arrow-up.png' : '/icons/arrow-down.png'} />
            </h4>
            <div
              className="solution-tabsIndustry-container-content"
              style={{ display: current === idx ? "block" : "none" }}
            >
              <img
                className="solution-tabsIndustry-container-content-image"
                src={`${protocol}${iconUrl}`}
              />
              {adapter(data.children[idx]).map(
                ({ id, type, Component, data }) => (
                  <Component data={data} key={id || type} />
                )
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
