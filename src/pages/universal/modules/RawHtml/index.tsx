import React, { useEffect } from 'react';
import $ from 'jquery';
import './index.less';
import certification_person from './certification_person.json'


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
        // 认证查询相关逻辑代码
        $('.search_btn').click(function(){
            let name = $('#name').val();
            let identifier = $("#identifier").val();
            if(name == "" || identifier == ""){
                alert("请填写姓名和编号");
                return;
            }
            certification_person.forEach((item) => {
                if(item.name === name && item.identifier === identifier){
                    $('#resultArea').hide();
                    $('#ccbMask').show();
                    $("#zsImg").attr("src",item.url);
                }else {
                    $('#resultArea').show();
                }
            });
        })
        $('#closeImg').click(function(){
            $('#ccbMask').hide();
        })
    })

    return (
        <div className="raw-html" dangerouslySetInnerHTML={{__html:data.mcontent}}></div>
    )
};