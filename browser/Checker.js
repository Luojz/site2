import { crawl } from './Spider'

// 敏感词检测
function detect(url, checks) {
    const result = []
    fetch(url)
        .then(res => res.text())
        .then(text => {
            checks.forEach(check => {
                if (text.includes(check)) {
                    result.push(check)
                }
            })
            if (result.length > 0) {
                console.warn(`${url}存在${result}`);
            } else {
                console.info(`${url}不存在${checks}`);
            }
        })
}


function supervise(selector, attribute, checks, pattern) {
    crawl(selector, attribute, pattern).forEach(url => detect(url, checks))
}


export default {
    detect,
    supervise,
}