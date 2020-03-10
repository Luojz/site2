import * as React from "react";
import ModuleTitle from "../common/ModuleTitle";
import "./Certification.less";
import cert from "./cert";

interface IProps {
    data:{
        items:Array<any>,
        title:string,
        desc:string
    }
}

const Certification = ({ data = cert }:IProps) => {
    return (
        <div className="certification">
            <ModuleTitle title={data.title} desc={data.desc} />
            <ul>
                {
                    data.items &&
                    data.items.map((item,index)=>
                        <li key={index}>
                            <div style={{background:`url(https:${item.iconUrl}) no-repeat center center`,backgroundSize:`1.78rem`}}></div>
                            <p>{item.title}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Certification;