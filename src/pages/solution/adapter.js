import Banner from './bussiness/Banner';
import CaseSituation from './bussiness/CaseSituation';
import TabsScene from './bussiness/TabsScene';
import ProtocolHTML from "./bussiness/ProtocolHTML";
import TabsFrameWork from "./bussiness/TabsFrameWork";
import Traffic from './bussiness/Traffic';
import PlatForm from './bussiness/Platform';
import AboutProduct from './bussiness/AboutProduct';


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
    BussinessChallenge: {
        Component: Traffic,
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