import React from 'react';
import mock from './mock.js';
import './index.less';

const Banner = ({data = mock}) => {
    return (
        <div className="product-body">
        <div className="c-hero-section J-pdBanner">
            <div className="c-hero-section-body">
                <div className="c-hero-section-inner">
                    <div className="c-hero-section-ct">
                        <h1 className="c-hero-section-tit">
                            {data.title}
                        </h1>
                        <div className="c-hero-section-des">
                            <p>{data.subTitle}</p>
                        </div>
                    </div>
                </div>
                <div className="c-hero-section-btn">
                    <a href={data.btnLink} className="c-btn buy">
                        {data.btnTitle}
                    </a>
                    {(data.addonButtons).length > 0 ?
                        <a href={data.addonButtons[0].btnLink}
                           className="c-btn p-weak-btn">{data.addonButtons[0].btnTitle}</a>
                        :''
                    }
                </div>
            </div>

            <div className="c-hero-icon-mod">
                {/*<img src={data.mimgUrl} width="100%" height="100%"/>*/}
	<img src={require('./m_product_banner.png')} width="100%" height="100%"/>
            </div>

        </div>
        </div>
    )
}

export default Banner;