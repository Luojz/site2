import React from 'react';
// import mock from './mock.js'
import './index.less'

const Banner = (props:any) => {
    console.log(props)
    return (
        <div className="c-hero-section J-pdBanner">

            <div className="c-hero-section-body">
                <div className="c-hero-section-inner">
                    <div className="c-hero-section-ct">
                        <h1 className="c-hero-section-tit">
                            云服务器
                        </h1>
                        <div className="c-hero-section-des">
                            <p>稳定、安全、弹性、高性能的云端计算服务，实时满足您的多样性业务需求</p>
                        </div>
                        <div className="c-hero-section-btn">
                            <a href="//console.yun.ccb.com/cvm/index" className="c-btn buy">
                                点击继续
                            </a>
                            <a href="//doc.yun.ccb.com/tcloud/Compute/CloudServer" className="c-btn p-weak-btn">帮助文档</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-hero-icon-mod">
                <img src="//imagecachexxfb.yun.ccb.com/static/product/product_banner.jpg" alt="" width="100%" height="100%"/>
            </div>

        </div>
    )
}

export default Banner;