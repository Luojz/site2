
/**
 * 获取域名主机 params: url:域名
 */
export function getHost(url) {
    var host = "null";
    if (typeof url == "undefined" || null == url) {
        url = window.location.href;
    }
    var regex = /^\w+\:\/\/([^\/]*).*/;
    var match = url.match(regex);
    if (typeof match != "undefined" && null != match) {
        host = match[1];
    }
    return host;
}

export function GetUrlParam(){
    let url = document.location.toString();
    let arrObj = url.split("?");
    let params = Object.create(null)
    if (arrObj.length > 1){
        arrObj = arrObj[1].split("&");
        arrObj.forEach(item=>{
            item = item.split("=");
            params[item[0]] = item[1]
        })
    }
    return params;
}
// ?a=1&b=2&c=3 ==> {a: "1", b: "2", c: "3"}


/**
 * 检验URL链接是否有效
 * 
 * .Open("GET",URL, false) true:异步；false:同步
 */
export function getUrlState(URL) {
    var suc = false;
    var xmlhttp = new ActiveXObject("microsoft.xmlhttp");
    xmlhttp.Open("GET", URL, false);
    try {
        xmlhttp.Send();
    } catch (e) {
    } finally {
        var result = xmlhttp.responseText;
        if (result) {
            if (xmlhttp.Status == 200) {
                suc = true;
            } else {
                suc = false;
            }
        } else {
            suc = false;
        }
    }
    return suc;
}



/**
 * 获取当前路径
 */
export function getCurrentPageUrl() {
    return (document.location.href || document.location).toString().toLowerCase()
}


/**
 * 完美判断是否为网址
 */
export function IsURL(strUrl) {
    var regular = /^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|asia|coop|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i;
    if (regular.test(strUrl)) {
        return true;
    }
    else {
        return false;
    }
}


