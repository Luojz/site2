
// [向前查找和向后查找](https://blog.csdn.net/libingxin/article/details/7840998)
// (?:str)   非捕获组
// (?=str) 肯定式向前查找
// (?!str) 否定式向前查找
// (?<=str) 肯定式向后查找
// (?<!str) 否定式向后查找

function extract(ele, attr) {
    function _extract(ele, attr) {
        let result = ele
        if (typeof attr === 'string') {
            const attrs = attr.split('.')
            attrs.forEach(item => result = result[item])
        }
        return result
    }

    return Array.isArray(attr) ? attr.map(item => _extract(ele, item)) : _extract(ele, attr)
}


function crawl(selector, attribute, pattern) {
    const result = []
    const elements = document.querySelectorAll(selector)
    for (let i = 0; i < elements.length; i++) {
        result.push(extract(elements[i], attribute))
    }
    if (typeof pattern !== 'undefined') {
        result = result.filter(item => item.match(pattern))
    }
    return result
}


// [[a, b, c], [d, e, f]] => [[a, d], [b, e], [c, f]]

function mix(fn, inputs) {
    const result = []
    const outputs = inputs.map(input => fn(...input))
    const len = outputs.length
    const childLen = outputs[0].length
    for (let i = 0; i < childLen; i++) {
        result[i] = []
        for (let j = 0; j < len; j++) {
            result[i].push(outputs[j][i])
        }
    }
    return result
}


export default {
    extract,
    crawl,
    mix,
}
