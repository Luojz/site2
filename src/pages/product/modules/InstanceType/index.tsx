import React, { useState } from 'react';

import Title from '../../../../components/Title/index';
import adapter from './adapter';
import './index.less';

interface IProps {
    data:{
        title:string;
        tabs:Array<any>;
        panels:Array<any>;
    }

}
interface ContentProps {
    parent:string;
    data:{
        title:string;
        tabs:Array<any>;
        panels:Array<any>;
    }
}

const InstanceContent = ({parent,data}:ContentProps) => {

    const defaultPanelId = data.tabs.filter(item=>item.parentId === parent)[0].panelId;
    const [panelId,setPanelId] = useState<string>(defaultPanelId);

    return (
        <div className="instance-content">
            <ul className="instance-content-tabs">
                {
                    data.tabs.filter(item=>item.parentId === parent).length > 0 &&
                    data.tabs.filter(item=>item.parentId === parent).map((item,index)=>{
                        return (
                            <li key={index} onClick={()=>setPanelId(item.panelId)}>
                                {item.title}
                            </li>
                        )
                    })
                }
            </ul>
            {
                data.panels.filter(item=>item.id===panelId).length > 0 &&
                adapter(data.panels.filter(item=>item.id===panelId)[0]).map(
                    ({ id, type, Component, data }) => (
                      <Component data={data} key={id || type} />
                    )
                )
            }
        </div>
    )
}

export default (props:IProps) => {

    const data = props.data;
    const defaultParentId = data.tabs.filter(item=>item.parentId==="default_root")[0].panelId;
    const [parentId,setParentId] = useState<string>(defaultParentId);
    const [showBottomId,setShowBottomId] = useState<number>(0);

    return (
        <div className="instance">
            <Title title={data.title} />
            <ul 
                className="instance-tabs"
                style={{"justifyContent": data.tabs.filter(item=>item.parentId==="default_root").length > 1 ? "start":"center"}}
            >
                {
                    data.tabs.length > 0 &&
                    data.tabs.filter(item=>item.parentId==="default_root").map((item,index)=>{
                        return (
                            <li 
                                key={index} 
                                onClick={()=>{setParentId(item.panelId);setShowBottomId(index);}}
                                style={{"marginRight":data.tabs.filter(item=>item.parentId==="default_root").length > 1 ? ".30rem":"0"}}
                            >
                                <div>{item.title}</div>
                                <p style={{"borderBottom": showBottomId===index ? "0.04rem solid #3f88ff":"0"}}></p>
                            </li>
                        )
                    })
                }
            </ul>
            {
                data.tabs.filter(item=>item.parentId === parentId).length > 0 &&
                <InstanceContent parent={parentId} data={data}/>
            }
        </div>
    )
}