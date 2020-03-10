import Banner from './bussiness/Banner';
import Recommend from './bussiness/Recommend';
import Products from './bussiness/Products';
import Industry from './bussiness/Industry';
import Solutions from "./modules/OurSolution";
import Certification from "./modules/Certification";


const components = {
    Banner: {
        Component: Banner,
        convert(data) {
            // return data
        }
    },
    Recommend: {
        Component: Recommend,
        convert({ title, desc, list } = {}) {
            // return {
            //     title,
            //     desc,
            //     list: list.map(({title, iconUrl, cardUrl}) => ({
            //         title,
            //         imgUrl: iconUrl,
            //         link: cardUrl
            //     })),
            //     count: 2
            // }
        }
    }, 
    ProductPanel: {
        Component: Products,
        convert({ content: { title, mTitle, list } } = { content: {} }) {
            // return {
            //     title,
            //     desc: mTitle,
            //     list: list.map(({title, iconUrl, iconHoverUrl, children}) => ({
            //         title,
            //         iconUrl,
            //         iconHoverUrl,
            //         children: children.map(({title, desc, titleLink, goTitle, goLink}) => ({
            //             title,
            //             desc,
            //             link: titleLink,
            //             goTitle,
            //             goLink,
            //         }))
            //     }))
            // }
        }
    },
    MyTrade: {
        Component: Solutions,
        convert(data) {
            // return data
        }
    },
    TabsIndustry: {
        Component: Industry,
        convert(data, childBlocks) {
            // return {...data, childBlocks}
        }
    },
    MyNatural: {
        Component: Certification,
        convert(data) {
            // return data
        }
    },
}


export default (data, method = 'get') => method === 'get'
    ? data.map(item => {
        const { id, type, data, childBlocks } = item
        const { Component, convert } = components[type]
        return { id, type, Component, data: convert(data, childBlocks) }
    })
    : [
        {
            // 
        }
    ]