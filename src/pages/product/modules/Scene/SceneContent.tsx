import React from 'react';


import mock from './mock.js';
import './index.less';

const SceneContent = (props:any) => {

    const list = props.data[0].blocks[0].data.content.raw.blocks;
    return (
        <div className="scene-content">
            {
                list.map((item:any,index:number)=>{
                    if(item.type==="header-three"){
                        return (
                            <p className="header-three" key={index}>
                                {item.text}
                            </p>
                        )
                    }
                    if(item.type==="unstyled"){
                        return (
                            <div className="unstyled" key={index}>
                                {item.text}
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default SceneContent;