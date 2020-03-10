export function scroll(selector) {
    var scrollArea = document.getElementById(selector);
    var li = scrollArea.getElementsByTagName('li');
    if (li.length < 10) {
        scrollArea.style.height = (li[0].offsetHeight * li.length) + 10 + "px";
    } else {
        scrollArea.style.height = (li[0].offsetHeight * 9) + 10 + "px";
        //滚动
        var liHeight = li[0].offsetHeight;   //单行滚动的高度
        var speed = 20;      //滚动的速度
        var timer;
        var delay = 3000;    //滚动的间隔
        scrollArea.scrollTop = 0;
        scrollArea.innerHTML += scrollArea.innerHTML;
        function startScroll() {
            timer = setInterval(scrollUp, speed);
            scrollArea.scrollTop++;
        }
        function scrollUp() {
            if (scrollArea.scrollTop % liHeight == 0) {
                clearInterval(timer);
                setTimeout(startScroll, delay);
            } else {
                scrollArea.scrollTop++;
                if (scrollArea.scrollTop >= scrollArea.scrollHeight / 2) {
                    scrollArea.scrollTop = 0;
                }
            }
        }
        setTimeout(startScroll, delay);
    }
}