import React, { useEffect } from 'react';
import $ from 'jquery';
import './index.less';


interface IProps {
    data:{
        "mod": string;
        "title": string;
        "content": string;
        "mcontent": string;
    }
}

export default (props:IProps) => {
    const data = props.data;
    
    useEffect(()=>{
        $(".tabs_js li").click(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            $(".tabs_li").eq($(this).index()).removeClass("hide").siblings(".tabs_li").addClass("hide");
    
        });
    })

    return (
        <div className="raw-html" dangerouslySetInnerHTML={{__html:data.mcontent}}></div>
    )
};