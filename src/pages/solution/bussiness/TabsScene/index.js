import React, { useState } from "react";
import "./index.less";
import { protocol } from "@/config/apis";
import Icon from "@/components/Icon";

export default ({ data }) => {
  const [current, setCurrent] = useState(0);
  return (
    <ul id="solution-tabsScene">
      <h3 className="solution-tabsScene-title">应用场景</h3>
      <ul className="solution-tabsScene-container">
        {data.tabs.map(({ title, scene_title, scene_desc, iconUrl }, i) => (
          <li key={title}>
            <h4
              className="solution-tabsScene-container-summary"
              onClick={() => setCurrent(current === i ? -1 : i)}
            >
              {title}
              <Icon
                src={
                  current === i
                    ? "/icons/arrow-up.png"
                    : "/icons/arrow-down.png"
                }
              />
            </h4>
            <div
              className="solution-tabsScene-container-content"
              style={{ display: current === i ? "block" : "none" }}
            >
              <div
                className="solution-tabsScene-container-content-img"
                style={{ backgroundImage: `url(${protocol}${iconUrl})` }}
              >
                <h3>{scene_title}</h3>
                <p>{scene_desc}</p>
              </div>
              <pre className="solution-tabsScene-container-content-text">
                {data.children[i].map((line, j) =>
                    line.match(/[\:\：]$/) ? (
                      <h3 key={j}>{line}</h3>
                    ) : (
                      <p key={j}>{line}</p>
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
