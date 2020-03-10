export function toFullScreen(){
    let elem = document.body;
    elem.webkitRequestFullScreen 
    ? elem.webkitRequestFullScreen()
    : elem.mozRequestFullScreen
    ? elem.mozRequestFullScreen()
    : elem.msRequestFullscreen
    ? elem.msRequestFullscreen()
    : elem.requestFullScreen
    ? elem.requestFullScreen()
    : alert("浏览器不支持全屏");
}

export function exitFullscreen(){
    let elem = parent.document;
    elem.webkitCancelFullScreen 
    ? elem.webkitCancelFullScreen()
    : elem.mozCancelFullScreen
    ? elem.mozCancelFullScreen()
    : elem.cancelFullScreen
    ? elem.cancelFullScreen()
    : elem.msExitFullscreen
    ? elem.msExitFullscreen()
    : elem.exitFullscreen
    ? elem.exitFullscreen()
    : alert("切换失败,可尝试Esc退出");
}

// 移动端适配方案
// function resize() {
//     var docEl = document.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function () {
//             var clientWidth = docEl.clientWidth;
//             var fontSize = 20;
//             docEl.style.fontSize = fontSize + 'px';
//             var docStyles = getComputedStyle(docEl);
//             var realFontSize = parseFloat(docStyles.fontSize);
//             var scale = realFontSize / fontSize;
//             console.log("realFontSize: " + realFontSize + ", scale: " + scale);
//             fontSize = clientWidth / 667 * 20;
//             if(isIphoneX()) fontSize = 19;
//             fontSize = fontSize / scale;
//             docEl.style.fontSize = fontSize + 'px';
//         };
//     // Abort if browser does not support addEventListener
//     if (!document.addEventListener) return;
//     window.addEventListener(resizeEvt, recalc, false);
//     document.addEventListener('DOMContentLoaded', recalc, false);

//     // iphoneX判断
//     function isIphoneX(){
//         return /iphone/gi.test(navigator.userAgent) && (screen.height == 812 && screen.width == 375)
//     }

// }



/**
 * 获取页面高度
 */
export function getPageHeight(){
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
            ? a
            : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}



/**
 * 获取页面scrollLeft
 */
export function getPageScrollLeft(){
    var a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
}


/**
* 获取页面宽度
*/
export function getPageWidth(){
var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
       ? a
       : g.documentElement;
return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);

}



/**
 * 获取页面scrollTop
 */    
export function getPageScrollTop(){
    var a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
}

/**
* 获取页面可视高度
*/
export function getPageViewHeight() {
   var d = document, a = d.compatMode == "BackCompat"
           ? d.body
           : d.documentElement;
   return a.clientHeight;
}


