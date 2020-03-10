export function base64_encode(str) {
    return window.btoa(window.unescape(encodeURIComponent(str)))
}

export function base64_decode(str) {
    try {
        return decodeURIComponent(window.escape(window.atob(str)))
    } catch (e) {
        return ''
    }
}

export function strToUnicode(str) {
    return window.escape(str).toLocaleUpperCase().replace(/%u/gi, '\\u')
}