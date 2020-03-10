
/**
 * 与insertBefore方法（已存在）对应的insertAfter方法
 * 
 * 
 */
export function insertAfter(newChild, refChild) {
    var parElem = refChild.parentNode;
    if (parElem.lastChild == refChild) {
        refChild.appendChild(newChild);
    } else {
        parElem.insertBefore(newChild, refChild.nextSibling);
    }
}



/**
 * 兼容浏览器绑定元素事件
 * 
 * obj：元素
 * 
 * evt:时间名称
 * 
 * fn:触发函数
 * 
 */

export function attachEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    } else if (obj.attachEvent) {
        obj.attachEvent('on' + evt, fn);
    }
}


/**
 * 光标停在文字的后面，文本框获得焦点时调用
 */
export function focusLast() {
    var e = event.srcElement;
    var r = e.createTextRange();
    r.moveStart('character', e.value.length);
    r.collapse(true);
    r.select();
}



/**
 * 实现checkbox全选与全不选
 */
export function checkAll(selectAllBoxId, childBoxsId) {
    var selectall = document.getElementById(selectAllBoxId);
    var allbox = document.getElementsByName(childBoxsId);
    if (selectall.checked) {
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].checked = true;
        }
    } else {
        for (var i = 0; i < allbox.length; i++) {
            allbox[i].checked = false;
        }
    }
}

export function getImageSize(file) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const { width, height } = image
            resolve({
                width,
                height,
            });
        }
        image.onerror = (e) => {
            reject('获取图片宽高失败')
        }
        image.src = window.URL.createObjectURL(new Blob([file], { type: file.type }));
    });
}

export function getImageSizeByUrl(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url + '?_=' + Date.parse(new Date());
        const check = () => {
            const { width, height } = img
            if (width > 0 && height > 0) {
                clearInterval(tid);
                resolve({
                    width,
                    height,
                });
            }
        }
        const tid = setInterval(check, 50);
    })
}


// ————————————————
// 版权声明：本文为CSDN博主「胖瞄」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_42029821/article/details/90770529

export function createNode(nodeName, isSvg) {
    var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
    node.normalizedNodeName = nodeName;
    return node;
}

export function removeNode(node) {
    var parentNode = node.parentNode;
    if (parentNode) parentNode.removeChild(node);
}

export function eventProxy(e) {
    return this.__l[e.type](e);
}

export function bind(el, type, handler) {
    el.__l = el.__l || {};
    el.__l[type] = handler;
    el.addEventListener(type, eventProxy);
}

export function unbind(el, type) {
    el.removeEventListener(type, eventProxy);
}

export function getHost(ele) {
    var p = ele.parentNode;
    while (p) if (p.host) return p.host; else if (p.shadowRoot && p.shadowRoot.host) return p.shadowRoot.host; else p = p.parentNode;
}

export function drag(selector) {
    //拖拽功能(主要是触发三个事件：onmousedown\onmousemove\onmouseup) 
    const dragger = document.querySelector(selector);
    let diffX = 0
    let diffY = 0
    //点击某物体时，用dragger对象即可，move和up是全局区域，也就是整个文档通用，应该使用document对象而不是dragger对象(否则，采用dragger对象时物体只能往右方或下方移动) 
    dragger.onmousedown = (e = window.event) => {
        console.log(e)
        // var e = e || window.event; //兼容ie浏览器 
        diffX = e.clientX - dragger.offsetLeft; //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离 
        diffY = e.clientY - dragger.offsetTop;
        /*低版本ie bug:物体被拖出浏览器可是窗口外部时，还会出现滚动条， 
          解决方法是采用ie浏览器独有的2个方法setCapture()\releaseCapture(),这两个方法， 
          可以让鼠标滑动到浏览器外部也可以捕获到事件，而我们的bug就是当鼠标移出浏览器的时候， 
          限制超过的功能就失效了。用这个方法，即可解决这个问题。注：这两个方法用于onmousedown和onmouseup中*/
        if (typeof dragger.setCapture != 'undefined') {
            dragger.setCapture();
        }

        dragger.onmousemove = (e = window.event) => {
            // var e = e || window.event; //兼容ie浏览器 
            //控制拖拽物体的范围只能在浏览器视窗内，不允许出现滚动条 
            let left = e.clientX - diffX;
            if (left < 0) {
                left = 0;
            } else if (left > window.innerWidth - dragger.offsetWidth) {
                left = window.innerWidth - dragger.offsetWidth;
            }
            let top = e.clientY - diffY;
            if (top < 0) {
                top = 0;
            } else if (top > window.innerHeight - dragger.offsetHeight) {
                top = window.innerHeight - dragger.offsetHeight;
            }
            //移动时重新得到物体的距离，解决拖动时出现晃动的现象 
            dragger.style.left = left + 'px';
            dragger.style.top = top + 'px';
        };

        dragger.onmouseup = (e) => { //当鼠标弹起来的时候不再移动 
            dragger.onmousemove = null;
            dragger.onmouseup = null; //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动） 
            //修复低版本ie bug 
            if (typeof dragger.releaseCapture != 'undefined') {
                dragger.releaseCapture();
            }
        };
    };
}