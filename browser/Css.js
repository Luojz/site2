
/**
 * 格式化CSS样式代码
 */
export function format(s) {// 格式化代码
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/;\s*;/g, ";"); // 清除连续分号
    s = s.replace(/\,[\s\.\#\d]*{/g, "{");
    s = s.replace(/([^\s])\{([^\s])/g, "$1 {\n\t$2");
    s = s.replace(/([^\s])\}([^\n]*)/g, "$1\n}\n$2");
    s = s.replace(/([^\s]);([^\s\}])/g, "$1;\n\t$2");
    return s;
}


/**
 * 压缩CSS样式代码
 */
export function compress(s) {// 压缩代码
    s = s.replace(/\/\*(.|\n)*?\*\//g, ""); // 删除注释
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, "$1");
    s = s.replace(/\,[\s\.\#\d]*\{/g, "{"); // 容错处理
    s = s.replace(/;\s*;/g, ";"); // 清除连续分号
    s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/); // 去掉首尾空白
    return (s == null) ? "" : s[1];
}

export function cssToDom(css) {
    var node = document.createElement('style');
    node.textContent = css;
    return node;
}

export function rpx(str) {
    return str.replace(/([1-9]\d*|0)(\.\d*)*rpx/g, function (a, b) {
        return window.innerWidth * Number(b) / 750 + 'px';
    });
}

// insert css to the current page
export function insertCSS(id, cssText, prefix = 'dynamic-inserted-css-') {
    let style = document.getElementById(prefix + id)
    if (!style) {
        style = document.createElement('style')
        style.id = prefix + id
        // IE 8/9 can not use document.head
        document.getElementsByTagName('head')[0].appendChild(style)
    }
    if (style.textContent !== cssText) {
        style.textContent = cssText
    }
    return style
}