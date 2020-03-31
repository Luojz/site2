import React, { useState } from "react";
import mock from "./mock";
import solutionIntro from "./solutionIntro";
import ModuleTitle from "../common/ModuleTitle";
import OurSolutionChild from "./OurSolutionChild";
import "./solution.less";

interface IProps {
    data:{
        tabs:Array<any>,
        title:string,
        desc:string,
        theme?:string,
        childBlocks?:Array<any>
    }
}

const OurSolution = ({ data = mock}:IProps) => {

    const [isShow, setIsShow] = useState<Boolean>(true);
    const [showId, setShowId] = useState<Number>(0);

    const show = (clickId:Number) => {
        if(clickId===showId){
            setIsShow(!isShow);
        }else{
            setShowId(clickId);
            setIsShow(true);
        }
    }

    return (
        <div className="our-solution">
            <ModuleTitle title={data.title} desc={data.desc} />
            <ul>
                {
                    data.tabs && 
                    data.tabs.map((item, index)=> 
                        <li key={index} onClick={()=>show(index)} style={{"borderBottom":index===showId && isShow ? "0":".02rem solid #e6e7ec"}}>
                            <div className="our-solution-hd">
                                <img src={item.hoverIconUrl} alt=""/>
                                <span style={{"color":index===showId && isShow ? "#2f88ff":"#9094a5"}}>{item.title}</span>
                                <i className={index===showId && isShow ?"closeIntro":"showIntro"}></i>
                            </div>
                            <div className="our-solution-bd" style={{"display":index===showId && isShow ?"block":"none"}} onClick={(e)=>e.stopPropagation()}>
                                <h3>应用场景</h3>
                                <ul>
                                    
                                    {
                                        solutionIntro.filter(child=>child.id===item.id)[0].childBlocks[0].data.list &&
                                        <OurSolutionChild list={solutionIntro.filter(child=>child.id===item.id)[0].childBlocks[0].data.list.filter(item=> !item.needHoverAnimation)} />
                                        
                                    }
                                
                                </ul>
                                <h3>平台优势</h3>
                                <ul>
                                    {   solutionIntro.filter(child=>child.id===item.id)[0].childBlocks[0].data.list &&
                                        <OurSolutionChild list={solutionIntro.filter(child=>child.id===item.id)[0].childBlocks[0].data.list.filter(item=> item.needHoverAnimation)} />
                                    }
                                </ul>
                            </div>
                            
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default OurSolution;