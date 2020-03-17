import React from 'react';
import mock from './mock.js';
import './index.less';

const Features = ({data = mock}) => {

    return (
        <div className="c-section c-p-y-tall function-mod">
            <div className="c-section-inner">
                <div className="c-section-hd">
                    <h3 className="c-section-tit">产品特性</h3>
                </div>
                <div className="c-section-bd">
                    <div className="function-list J-section2List">
                        <div className="J-section2Item">
                            <div className="c-media">
                                <div className="c-media-img">
                                    <img src="//imagecachexxfb.yun.ccb.com/static/product/product_character1.png" />
                                </div>
                                <div className="c-media-body">
                                    <h4 className="c-media-heading">
                                        弹性可扩展
                                    </h4>
                                    <p className="c-media-info">
                                        单磁盘容量最大支持16TB，单个CVM累计可挂载160TB，按需扩容，灵活应对TB/PB级数据的大数据处理场景。
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="J-section2Item">
                            <div className="c-media">
                                <div className="c-media-img">
                                    <img src="//imagecachexxfb.yun.ccb.com/static/product/product_character2.png" />
                                </div>
                                <div className="c-media-body">
                                    <h4 className="c-media-heading">
                                        多存储类型
                                    </h4>
                                    <p className="c-media-info">
                                        提供普通、SSD两种云硬盘卷类型，采用SSD类型的CBS，单盘最大提供24000随机IOPS，260MB/s吞吐，轻松支撑业务侧高吞吐量DB访问。
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;