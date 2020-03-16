import React, { useState, useEffect } from "react";
import "./index.less";
import { protocol } from "@/config/apis";
import Icon from "@/components/Icon";

export default ({ data }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {});
  return (
    <ul id="solution-tabsScene">
      <h3 className="solution-tabsScene-title">应用场景</h3>
      <ul className="solution-tabsScene-container">
        {data.tabs.map(({ title, scene_title, scene_desc, iconUrl }, idx) => (
          <li key={title}>
            <h4
              className="solution-tabsScene-container-summary"
              onClick={() => setCurrent(current === idx ? -1 : idx)}
            >
              {title}
              <Icon
                src={
                  current === idx
                    ? "/icons/arrow-up.png"
                    : "/icons/arrow-down.png"
                }
              />
            </h4>
            <div
              className="solution-tabsScene-container-content"
              style={{ display: current === idx ? "block" : "none" }}
            >
              <div
                className="solution-tabsScene-container-content-img"
                style={{ backgroundImage: `url(${protocol}${iconUrl})` }}
              >
                <h3>{scene_title}</h3>
                <p>{scene_desc}</p>
              </div>
              <pre className="solution-tabsScene-container-content-text">
                {data.children[idx][0].data.content
                  .split("\n")
                  .map((line, idx2) =>
                    line.trim().match(/[\:\：]$/) ? (
                      <h3 key={idx2}>{line}</h3>
                    ) : (
                      <p key={idx2}>{line}</p>
                    )
                  )}
              </pre>
            </div>
          </li>
        ))}
      </ul>
    </ul>
  );
};
