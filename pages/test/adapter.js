const components = {
    Banner: {
        componentName: 'Banner',
        convert(data, childBlocks) {
            return {...data, childBlocks}
        }
    },
    Test: {
        componentName: 'Test',
        convert(data, childBlocks) {
            return {...data, childBlocks}
        }
    },
    OtherTest: {
        componentName: 'OtherTest',
        convert(data, childBlocks) {
            return {...data, childBlocks}
        }
    },
}


export default (data, method = 'get') => method === 'get'
    ? data.map(item => {
        const { id, type, data, childBlocks = [] } = item
        const { componentName, convert } = components[type]
        return { id, type, componentName, data: convert(data, childBlocks) }
    })
    : [
        {
            // 
        }
    ]