import Scene from './modules/Scene/index';
import Recommend from './modules/Recommend/index';
import Features from './modules/Features/index';
import Functions from './modules/Function/index';
import Details from './modules/Details/index';
import InstanceType from './modules/InstanceType/index';


interface DataType {
    id:string;
    blocks:{
        id:string;
        type:string;
        data:{
            title:string;
            tabs:Array<any>;
        };
        panels:Array<any>;
    }[];
}

interface componentsType {
    [key:string]: {
        Component(props:any):JSX.Element;
        convert(data:any,panels?:any):any;
    },
}

const components:componentsType = {
    section3: {     //应用场景(新版)
        Component: Scene,
        convert(data,panels) {
            return {...data,panels}
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
            return data;
        }
    }, 
    section11: {    //产品详细信息(新版)
        Component: Details,
        convert(data,panels) {
            return {...data,panels};
        }
    },
    section4: {     //相关云产品(新版)
        Component: Recommend,
        convert(data) {
            return data;
        }
    },
    section12: {     //实例类型(新版)
        Component: InstanceType,
        convert(data, panels) {
            return {...data, panels}
        }
    },
}

export default (data:DataType) =>  data.blocks.map(item => {
    const { id, type, data, panels } = item;
    const { Component, convert } = components[type];
    return { id, type, Component, data: convert(data, panels) }
})
   