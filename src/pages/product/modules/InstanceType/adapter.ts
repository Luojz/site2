import InstanceTypeChild from './InstanceTypeChild/index';

interface DataType {
    id:string;
    blocks:{
        id:string;
        type:string;
        data:object;
    }[];
}

interface componentsType {
    [key:string]: {
        Component(props:any):JSX.Element;
        convert(data:object):any;
    },
}

const components:componentsType = {
    section13: {     //实例类型-子项(新版)
        Component: InstanceTypeChild,
        convert(data:object) {
            return data
        }
    },
}

export default (data:DataType) =>  data.blocks.map(item => {
    const { id, type, data } = item;
    const { Component, convert } = components[type];
    return { id, type, Component, data: convert(data) }
})