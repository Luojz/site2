import React, { useState } from "react";
import "./index.less";
import adapter from "./adapter";
import { protocol } from "@/config/apis";
import Icon from '@/components/Icon'

export default ({ data }) => {
  const [current, setCurrent] = useState(0);
  return (
    <section id="solution-tabsFramework">
      <h3 className="solution-tabsFramework-title">{data.title}</h3>
      <ul className="solution-tabsFramework-container">
        {data.tabs.map(({ title, iconUrl }, idx) => (
          <li key={title}>
            <h4
              className="solution-tabsFramework-container-summary"
              onClick={() => setCurrent(current === idx ? -1 : idx)}
              style={{color: current === idx ? '#2F88FF' : '#333'}}
            >
              {title}
              <Icon src={current === idx ? '/icons/arrow-up.png' : '/icons/arrow-down.png'} />
            </h4>
            <div
              className="solution-tabsFramework-container-content"
              style={{ display: current === idx ? "block" : "none" }}
            >
              <img
                className="solution-tabsFramework-container-content-image"
                src={`${protocol}${iconUrl}`}
                style={{display: iconUrl ? 'inline-block' : 'none'}}
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
