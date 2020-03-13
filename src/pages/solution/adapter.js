import Banner from './bussiness/Banner';
import BussinessChallenge from './bussiness/BussinessChallenge';
import CaseSituation from './bussiness/CaseSituation';
import PlatformAdv from './bussiness/PlatformAdv';
import ProtocolHTML from "./bussiness/ProtocolHTML";
import TabsIndustry from "./bussiness/TabsIndustry";


const components = {
    Banner: {
        Component: Banner,
        convert(data) {
            return data
        }
    },
    BussinessChallenge: {
        Component: BussinessChallenge,
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
    PlatformAdv: {
        Component: PlatformAdv,
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