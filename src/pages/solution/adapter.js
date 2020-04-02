import Banner from './business/Banner';
import CaseSituation from './business/CaseSituation';
import TabsScene from './business/TabsScene';
import ProtocolHTML from "./business/ProtocolHTML";
import TabsFrameWork from "./business/TabsFrameWork";
import BusinessChallenge from './business/BusinessChallenge';
import PlatForm from './business/Platform';
import AboutProduct from './business/AboutProduct';


const components = {
    Banner: {
        Component: Banner,
        convert(data) {
            return data
        }
    },
    CaseSituation: {
        Component: CaseSituation,
        convert(data) {
            return data
        }
    },
    /**
     * 业务挑战
     */
    BusinessChallenge: {
        Component: BusinessChallenge,
        convert(data) {
            return data
        }
    },
    TabsScene: {
        Component: TabsScene,
        convert(data, childBlocks) {
            return {
                ...data, 
                children: childBlocks.map(({childBlocks}) => {
                    let r = []
                    const Situation = childBlocks.filter(({type}) => type === 'Situation')[0]
                    if (Situation) {
                        r = Situation.data.content
                                .replace(/\r\n/g, '\n')
                                .split("\n")
                                .map(line => line.trim())
                                .filter(line => line)
                    }
                    return r
                })}
        }
    },
    /**
     * 平台优势
     */
    PlatformAdv: {
        Component: PlatForm,
        convert(data) {
            return data
        }
    },
    ProtocolHTML: {
        Component: ProtocolHTML,
        convert(data) {
            return data
        }
    },
    protocolHTML: {
        Component: ProtocolHTML,
        convert(data) {
            return data
        }
    },
    TabsIndustry: {
        Component: TabsFrameWork,
        convert(data, childBlocks) {
            return {...data, children: childBlocks.map(({childBlocks}) => childBlocks)}
        }
    },
    AboutProduct: {
        Component: AboutProduct,
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