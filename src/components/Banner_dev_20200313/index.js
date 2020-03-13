import * as React from "react";
import "./index.less";
import Swiper from "react-image-swiper"
import mock from './mock.js'

const options = {
    showPot: true,  //是否显示下方pot 默认为true
    timeGap: 3000,   //时间间隔 默认3000
    autoplay: true  //默认为true
};

export default ({ data = mock }) => {
    console.log('Banner-------------')
    console.log(data)
    return (
        <Swiper options={options}>
            {
                data.map((item, index) => {
                    return <div className="slider-item components-banner" key={index}>
                        <a href={item["herfUrl"] ? item["herfUrl"] : ''}>
                            <img src={item.images} loop={true} />
                        </a>
                        <div className='banner-copywriter'>
                            <h3>{item["title"] ? item["title"] : ""}</h3>
                            <p>{item["desc"] ? item["desc"] : ""}</p>
                        </div>
                    </div>
                })
            }
        </Swiper>
    )
};
