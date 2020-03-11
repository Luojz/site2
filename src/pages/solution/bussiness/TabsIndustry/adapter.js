import FrameWorkIntro from './partials/FrameWorkIntro'
import FrameWorkCloud from './partials/FrameWorkCloud'
import FrameWorkConfig from './partials/FrameWorkConfig'


const components = {
    FrameWorkIntro: {
        Component: FrameWorkIntro,
        convert(data) {
            return data
        }
    },
    FrameWorkCloud: {
        Component: FrameWorkCloud,
        convert(data) {
            return data
        }
    },
    FrameWorkConfig: {
        Component: FrameWorkConfig,
        convert(data) {
            return data
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