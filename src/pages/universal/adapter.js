import Banner from './modules/Banner/index';
import RawHtml from './modules/RawHtml/index';
import Notice from './modules/Notice/index';

const components = {
    Banner: {
        Component: Banner,
        convert(data) {
            return data
        }
    },
    RawHtml: {
        Component: RawHtml,
        convert(data) {
            return data
        }
    },
    Notice: {
        Component: Notice,
        convert(data) {
            return data
        }
    }
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