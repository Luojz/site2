/**
 * 判断是否移动设备
 */
export function isMobile() {
    if (typeof this._isMobile === 'boolean') {
        return this._isMobile;
    }
    var screenWidth = this.getScreenWidth();
    var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport
        || rendererModel.runningExperiments.fixviewport;
    var fixViewPortsExperimentRunning = fixViewPortsExperiment
        && (fixViewPortsExperiment.toLowerCase() === "new");
    if (!fixViewPortsExperiment) {
        if (!this.isAppleMobileDevice()) {
            screenWidth = screenWidth / window.devicePixelRatio;
        }
    }
    var isMobileScreenSize = screenWidth < 600;
    var isMobileUserAgent = false;
    this._isMobile = isMobileScreenSize && this.isTouchScreen();
    return this._isMobile;
}



/**
 * 判断是否移动设备访问
 */
export function isMobileUserAgent() {
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i
        .test(window.navigator.userAgent.toLowerCase()));
}


/**
* 判断是否苹果移动设备访问
*/
export function isAppleMobileDevice() {
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent
        .toLowerCase()));
}

/**
 * 判断是否安卓移动设备访问
 */
export function isAndroidMobileDevice() {
    return (/android/i.test(navigator.userAgent.toLowerCase()));
}

/**
 * 判断是否Touch屏幕
 */
export function isTouchScreen() {
    return (('ontouchstart' in window) || window.DocumentTouch
        && document instanceof DocumentTouch);
}

/**
 * 判断是否在安卓上的谷歌浏览器
 */
export function isNewChromeOnAndroid() {
    if (this.isAndroidMobileDevice()) {
        var userAgent = navigator.userAgent.toLowerCase();
        if ((/chrome/i.test(userAgent))) {
            var parts = userAgent.split('chrome/');

            var fullVersionString = parts[1].split(" ")[0];
            var versionString = fullVersionString.split('.')[0];
            var version = parseInt(versionString);

            if (version >= 27) {
                return true;
            }
        }
    }
    return false;
}



/**
 * 获取移动设备初始化大小
 */
export function getInitZoom() {
    if (!this._initZoom) {
        var screenWidth = Math.min(screen.height, screen.width);
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            screenWidth = screenWidth / window.devicePixelRatio;
        }
        this._initZoom = screenWidth / document.body.offsetWidth;
    }
    return this._initZoom;
}

/**
 * 获取移动设备最大化大小
 */
export function getZoom() {
    var screenWidth = (Math.abs(window.orientation) === 90) ? Math.max(screen.height, screen.width) : Math.min(screen.height, screen.width);
    if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
        screenWidth = screenWidth / window.devicePixelRatio;
    }
    var FixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
    var FixViewPortsExperimentRunning = FixViewPortsExperiment && (FixViewPortsExperiment === "New" || FixViewPortsExperiment === "new");
    if (FixViewPortsExperimentRunning) {
        return screenWidth / window.innerWidth;
    } else {
        return screenWidth / document.body.offsetWidth;
    }
}
/**
 * 获取移动设备屏幕宽度
 */
export function getScreenWidth() {
    var smallerSide = Math.min(screen.width, screen.height);
    var fixViewPortsExperiment = rendererModel.runningExperiments.FixViewport || rendererModel.runningExperiments.fixviewport;
    var fixViewPortsExperimentRunning = fixViewPortsExperiment && (fixViewPortsExperiment.toLowerCase() === "new");
    if (fixViewPortsExperiment) {
        if (this.isAndroidMobileDevice() && !this.isNewChromeOnAndroid()) {
            smallerSide = smallerSide / window.devicePixelRatio;
        }
    }
    return smallerSide;
}

// 针对不同分辨率计算rem
export function adjust(baseWidth = 750) {
    const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    const recalc = () => {
        const docEl = document.documentElement
        if (!docEl.clientWidth) return;
        docEl.style.fontSize = 100 * (docEl.clientWidth / baseWidth) + 'px';
    };
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    document.addEventListener('DOMContentLoaded', recalc, false);
}