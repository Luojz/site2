import SceneContent from './SceneContent/index';

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
    aside: {     //应用场景-内容版式(新版)
        Component: SceneContent,
        convert(data) {
            return data;
        }
    },
}

export default (data:DataType) =>  data.blocks.map(item => {
    const { id, type, data } = item;
    const { Component, convert } = components[type];
    return { id, type, Component, data: convert(data) }
})