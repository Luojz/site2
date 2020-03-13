import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import mock from './mock.js';
import './index.less';

const Details = ({data = mock}) => {

    console.log(data);
    return (
        <div className="c-section c-p-y-tall function-mod">
            <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>


            <div className="c-section-inner">
                <div className="c-section-hd">
                    <h3 className="c-section-tit">产品信息</h3>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;