import React from 'react';
import mock from './mock.js';
import './index.less';

const Banner = ({data = mock}) => {
    console.log("banner11 data: ", data)
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
                            <a style={{display:(data.btn1Title)?'inline-block':'none'}}href={data.btn1Link} className="c-btn buy">
                                {data.btn1Title}
                            </a>
                            <a style={{display:(data.btn2Title)?'inline-block':'none'}}href={data.btn2Link} className="c-btn p-weak-btn">
                                {data.btn2Title}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-hero-icon-mod">
                {/*<img src={data.mbgUrl} width="100%" height="100%"/>*/}
                <img src={require('./m_solution_banner.png')} width="100%" height="100%"/>
            </div>

        </div>
    )
}

export default Banner;