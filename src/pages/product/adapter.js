import SceneContent from './modules/Scene/SceneContent';
import Scene from './modules/Scene/index';
import Recommend from './modules/Recommend/index';
import Features from './modules/Features/index';
import Functions from './modules/Function/index';
import Details from './modules/Details/index';
import InstanceType from './modules/InstanceType/index';
import InstanceTypeChild from './modules/InstanceType/InstanceTypeChild';

const components = {
    section3: {     //应用场景(新版)
        Component: Scene,
        convert(data) {
            // return data
        }
    },
    aside: {     //应用场景-内容版式(新版)
        Component: SceneContent,
        convert(data) {
            // return data
        }
    },
    section8: {     //产品特性(新版)
        Component: Features,
        convert(data) {
             return data
        }
    },
    section10: {    //产品功能(新版)
        Component: Functions,
        convert(data) {
            // return data;
        }
    }, 
    section11: {    //产品详细信息(新版)
        Component: Details,
        convert(data,panels) {
            return {...data,panels};
        }
    }, 
    // text: {     //产品详细信息-子项(新版)
    //     Component: DetailsText,
    //     convert(data) {
    //         // return data
    //     }
    // },
    section4: {     //相关云产品(新版)
        Component: Recommend,
        convert(data) {
            // return data
        }
    },
    section12: {     //实例类型(新版)
        Component: InstanceType,
        convert(data) {
            // return data
        }
    },
    section13: {     //实例类型-子项(新版)
        Component: InstanceTypeChild,
        convert(data) {
            // return data
        }
    },
    
}

export default (data) =>  data.map(item => {
    const { id, type, data, panels } = item;
    const { Component, convert } = components[type];
    return { id, type, Component, data: convert(data, panels) }
})
   