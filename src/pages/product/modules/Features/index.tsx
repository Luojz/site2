import React from 'react';
import mock from './mock.js';
import './index.less';

const Features = ({data = mock}) => {

    return (
        <div className="product-body">
            <div className="c-section c-p-y-tall function-mod">
            <div className="c-section-inner">
                <div className="c-section-hd">
                    <h3 className="c-section-tit">{data.title}</h3>
                </div>
                <div className="c-section-bd">
                    <div className="function-list J-section2List">
                        {
                            data.list && data.list.map((item)=>{
                                return (
                                    <div className="J-section2Item" key={item.title}>
                                        <div className="c-media">
                                            <div className="c-media-img">
                                                <img src={item.iconUrl} />
                                            </div>
                                            <div className="c-media-body">
                                                <h4 className="c-media-heading">
                                                    {item.title}
                                                </h4>
                                                <p className="c-media-info">
                                                    {
                                                        item.desc.blocks.map((line)=>{
                                                            return line.text
                                                        })
                                                    }
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Features;