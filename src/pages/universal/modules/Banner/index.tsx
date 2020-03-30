import React from 'react';
import './index.less';

interface IProps {
    data:{
        title:string;
        desc:string;
        bgUrl:string;
        mbgUrl:string;
        btn1Title:string;
        btn1Icon:string;
        btn1Link:string;
        btn2Title:string;
        btn2Icon:string;
        btn2Link:string;
    }
}

export default (props:IProps) => {
    console.log(props.data);
    const data = props.data;
    return (
        <div className="c-hero-section J-pdBanner">
            <div className="c-hero-section-body">
                <div className="c-hero-section-inner">
                    <div className="c-hero-section-ct">
                        <h1 className="c-hero-section-tit">
                            {data.title}
                        </h1>
                        <div className="c-hero-section-des">
                            <p>{data.desc}</p>
                        </div>
                        <div className="c-hero-section-btn">
                            {
                                data.btn1Link !== "" &&
                                <a href={data.btn1Link} className="c-btn buy">
                                    {data.btn1Title}
                                </a>
                            }
                            {
                                data.btn2Link !== "" &&
                                <a href={data.btn2Link} className="c-btn buy">
                                    {data.btn2Title}
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-hero-icon-mod">
                <img src={require('./m_solution_banner.png')} width="100%" height="100%"/>
            </div>

        </div>
    )
}