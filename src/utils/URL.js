export function replace(url = '') {
    return url.replace('//yun.ccb.com', process.env.NODE_ENV === 'production' ? '//m.yun.ccb.com' : '//localhost:3000') || undefined
}