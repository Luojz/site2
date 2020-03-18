import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import mock from './mock.js';
import './index.less';

const Details = ({data = mock}) => {
    console.log("details data:", data);
    return (
        <div className="c-section c-p-y-tall function-mod">
            <div className="c-section-inner">
                <div className="c-section-hd">
                    <h3 className="c-section-tit">{data.title}</h3>
                </div>
                <Tabs defaultIndex={0}>
                    <TabList>
                        {
                            data.tabs.map((item, i)=>{
                                return <Tab key={i}>{item.name}</Tab>
                            })
                        }
                    </TabList>
                    {
                        data.panels[0].blocks.map((item, n)=>{
                            let blocks = item.data.raw.blocks;
                            let sum = blocks.map((it,i)=>{
                                return (
                                            <div className="d-item"  key={i}>
                                                {it.text}
                                            </div>
                                        )
                            })

                            return <TabPanel key={n}>{ sum }</TabPanel>

                        })
                    }
                </Tabs>
            </div>
        </div>
    )
}

export default Details;