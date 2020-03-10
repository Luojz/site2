import * as React from "react";
import "./index.less";


export default ({ data = { title: 'title', desc: 'desc' } }) => {
    return (
        <div className="headline">
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
        </div>
    )
};
