import Aside from './modules/Aside';
import Text from './modules/Text';
import Section3 from './modules/Section3';
import Section4 from './modules/Section4';
import Section8 from './modules/Section8';
import Section10 from './modules/Section10';
import Section11 from './modules/Section11';
import Section12 from './modules/Section12';
import Section13 from './modules/Section13';

const components = {
    section3: {     //应用场景(新版)
        Component: Section3,
        convert(data) {
            return data
        }
    },
    aside: {     //应用场景-内容版式(新版)
        Component: Aside,
        convert(data) {
            return data
        }
    },
    section8: {     //产品特性(新版)
        Component: Section8,
        convert(data) {
            return data
        }
    },
    section10: {    //产品功能(新版)
        Component: Section10,
        convert(data) {
            return data;
        }
    }, 
    section11: {    //产品详细信息(新版)
        Component: Section11,
        convert(data,panels) {
            return {...data,panels};
        }
    }, 
    text: {     //产品详细信息-子项(新版)
        Component: Text,
        convert(data) {
            return data
        }
    },
    section4: {     //相关云产品(新版)
        Component: Section4,
        convert(data) {
            return data
        }
    },
    section12: {     //实例类型(新版)
        Component: Section12,
        convert(data) {
            return data
        }
    },
    section13: {     //实例类型-子项(新版)
        Component: Section13,
        convert(data) {
            return data
        }
    },
    
}

export default (data) =>  data.map(item => {
    const { id, type, data, panels } = item;
    const { Component, convert } = components[type];
    return { id, type, Component, data: convert(data, panels) }
})
   