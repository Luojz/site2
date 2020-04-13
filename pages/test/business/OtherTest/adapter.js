const components = {
    Sec1: {
        componentName: 'Sec1',
        convert(data, childBlocks) {
            return {...data, childBlocks}
        }
    },
    Sec2: {
        componentName: 'Sec2',
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