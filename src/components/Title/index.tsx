import * as React from "react";

import "./index.less";

interface Props {
    title:string
}

function Title ({title}:Props) {

    return (
        <div className="module-hd">
            <h3>{title}</h3>
        </div>
    )
};

export default Title;