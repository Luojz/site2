export function loadJS(src) {
    return new Promise((resolve, reject) => {
        try {
            const ele = document.createElement('script')
            ele.type = 'text/javascript'
            ele.src = src
            ele.onload = resolve
            ele.onerror = reject
            document.getElementsByTagName('body')[0].appendChild(ele)
        } catch (e) {
            reject(e)
        }
    })
}

export function loadCSS(src) {
    return new Promise((resolve, reject) => {
        try {
            const ele = document.createElement('link')
            ele.type = 'text/css'
            ele.src = src
            ele.onload = resolve
            ele.onerror = reject
            document.getElementsByTagName('head')[0].appendChild(ele)
        } catch (e) {
            reject(e)
        }
    })
}
