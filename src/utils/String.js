export function cutStr(str, maxLen, remains = '') {
    let j = 0
    for (let i = 0; i < str.length; i++) {
        j += /[x00-xff]/.test(str[i]) ? 1 : 2
        if (j > maxLen) {
            return str.slice(0, i) + remains
        }
    }
    return str
}


function removeRepeat(str, separate = ' ') {
    return [...new Set(str.split(separate))].join(separate)
}


function count(text, word) {
    return text.split(word).length - 1
}


function counts(text, words) {
    return words.map((word) => count(text, word))
}


function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
}


function camelize(str) {
    return str.replace(/[\_\-](\w)/g, (_, $1) => $1 ? $1.toUpperCase() : '')
}

function camelCase(str) {
    return str.replace(/-(\w)/g, function (_, $1) {
        return $1.toUpperCase();
    });
}

function hyphenate(str) {
    return str.replace(/\B(A-Z)/g, '-$1').toLowerCase()
}

// console.log(str.match(/[\u0000-\u00ff]/g))     //半角   
// console.log(str.match(/[\u4e00-\u9fa5]/g))     //中文   
// console.log(str.match(/[\uff00-\uffff]/g))     //全角  


export function hasChinese(str) {
    return str.search(/[\u4e00-\u9fa5]/g) !== -1
}


export function getRealLength(str) {
    let result = str.length

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 128) {
            result++
        }
    }

    return result
}

function repeat(str, n) {
    let res = '';
    while (n) {
        if (n % 2 === 1) {
            res += str;
        }
        if (n > 1) {
            str += str;
        }
        n >>= 1;
    }
    return res
};
