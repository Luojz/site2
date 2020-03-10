import * as React from "react";

import "./ModuleTitle.less";

interface Props {
    title:string,
    desc:string
}

function ModuleTitle ({title,desc}:Props) {

    return (
        <div className="module-head">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
};

export default ModuleTitle;