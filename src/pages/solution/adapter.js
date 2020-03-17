import Banner from './bussiness/Banner';
import CaseSituation from './bussiness/CaseSituation';
import TabsScene from './bussiness/TabsScene';
import ProtocolHTML from "./bussiness/ProtocolHTML";
import TabsIndustry from "./bussiness/TabsIndustry";
import Traffic from './bussiness/Traffic';
import PlatForm from './bussiness/Platform';


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
            return {...data, children: childBlocks.map(({childBlocks}) => childBlocks)}
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
        Component: TabsIndustry,
        convert(data, childBlocks) {
            return {...data, children: childBlocks.map(({childBlocks}) => childBlocks)}
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