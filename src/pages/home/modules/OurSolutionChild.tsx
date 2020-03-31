import React, { useState, useEffect } from "react";

import "./solution.less";

interface Props {
    list:{ 
        needHoverAnimation: boolean; 
        iconUrl: string; 
        title: string; 
        desc: string; 
    }[]
}

const OurSolutionChild = ({list}:Props) => {
    
    const [showAll,setShowAll] = useState<Boolean>( list.length > 2 ? false : true );
    
    return (
        <>
            {
                showAll ?
                list.map((item,index)=>{
                    return (
                        <li key={index}>
                            <div>
                                <img src={item.iconUrl} alt=""/>
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        </li>
                    )
                })
                :
                list.filter((item,index)=>index<3).map((item,index)=>{
                    return (
                        index < 2 ?
                        <li key={index}>
                            <div>
                                <img src={item.iconUrl} alt=""/>
                            </div>
                            <div>
                                <h3>{item.title}</h3>
                                <p>
                                    {item.desc}
                                </p>
                            </div>
                        </li>
                        :
                        <li key={index}>
                            <span className="showMore" onClick={(e)=>{e.stopPropagation();setShowAll(true)}}>查看更多</span>
                        </li>
                    )
                })
            }
        </>
    )
}

export default OurSolutionChild;