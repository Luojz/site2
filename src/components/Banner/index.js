import React, { useEffect } from 'react';
import "./index.less";
import Swiper from "swiper"
import mock from './mock.js'

export default ({ data = mock }) => {

    useEffect(() => {
        var mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,

            },
            preventClicksPropagation: true,
        })
    });

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    data.map((item, index) => {
                        return (
                            <div className="swiper-slide components-banner" key={index}>
                                <a href={item["herfUrl"] ? item["herfUrl"] : ''}>
                                    <img src={item.images} />
                                </a>
                                <div className='banner-copywriter'>
                                    <h3>{item["title"] ? item["title"] : ""}</h3>
                                    <p>{item["desc"] ? item["desc"] : ""}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
};
