const LINE = '/api'
const TEST = '/data'

export const isDev = process.env.NODE_ENV !== 'production'

export const baseURL = isDev ? TEST : LINE

export const protocol = 'https:'//'https:' // isDev ? 'http:' : ''

export const announceURL = `${protocol}//yun.ccb.com/announce`