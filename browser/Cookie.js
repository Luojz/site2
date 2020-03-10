// 来源：https://blog.csdn.net/weixin_38098195/article/details/80811223

// 获取cookie、
export function getCookie(name) {
    const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    const matches = document.cookie.match(reg)
    return matches && matches[2]
}

// 设置cookie,增加到vue实例方便全局调用
export function setCookie(name, value, expiredays) {
    const exp = new Date();
    exp.setDate(exp.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exp.toGMTString());
};

// 删除cookie
export function delCookie(name) {
    const exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const value = getCookie(name);
    if (value != null)
        document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
};

// 解析cookie
export function parseCookie(cookie) {
    const cookies = {}
    if (cookie) {
        cookie.split(';').forEach(item => {
            const pair = item.split('=')
            cookies[pair[0].trim()] = pair[1]
        })
        cookies.name = 'connect.sid'
        cookies.value = cookies[cookies.name]
    }
    return cookies
}