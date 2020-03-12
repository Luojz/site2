import * as React from "react";

import "./index.less";

interface Props {
    title:string
}

function Title ({title}:Props) {

    return (
        <div className="module-head">
            <h3>{title}</h3>
        </div>
    )
};

export default Title;