import * as React from "react";
import "./index.less";

export default ({ data }) => {
    return (
        <div className='components-industryPlugs'>
            <div className='industryPlugs-left'>
                <img src={data["iconUrl"]}></img>
            </div>
            <div className="industryPlugs-right">
                <h3>{data["title"]}</h3>
                <p>{data["desc"]}</p>
            </div>
        </div>
    )
};
