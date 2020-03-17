function setRootFontSize() {
    let width = document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 540) {
        width = 540;
    }
    if (width < 320){
        width = 320;
    }
    fontSize = (width / 7.5); //屏幕分成7.5份
    document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px';
}

setRootFontSize();

window.addEventListener('resize', function() {
    setRootFontSize();
}, false);