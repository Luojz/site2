export default class DrawClock {
    constructor(el) {
        this.ctx = el.getContext('2d');//方法返回一个用于在画布上绘图的环境
        this.width = this.ctx.canvas.width;
        this.height = this.ctx.canvas.height;
        this.r = this.width / 2;
        this.rem = this.width / 200;
        this.digits = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];

        setInterval(() => {
            this.init();
        }, 1000);
    }

    // 
    init() {
        this.ctx.clearRect(0, 0, this.width, this.height);    //在给定的矩形内清除指定的像素
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const hour = hours >= 12 ? hours - 12 : hours;
        const minute = minutes + seconds / 60;

        this.drawBackground();
        this.drawHour(hour, minute);
        this.drawMinute(minute);
        this.drawSecond(seconds);
        this.drawDot();
        this.ctx.restore();
    }

    // 
    drawBackground() {
        this.ctx.save();
        this.ctx.translate(this.r, this.r);         //重新映射画布上的 (0,0) 位置
        this.ctx.beginPath();
        this.ctx.lineWidth = 8 * this.rem;
        this.ctx.arc(0, 0, this.r - this.ctx.lineWidth / 2, 0, 2 * Math.PI, false);    //创建弧/曲线（用于创建圆形或部分圆）
        this.ctx.stroke();
        this.ctx.font = 16 * this.rem + "px Arial";//设置或返回文本内容的当前字体属性
        this.ctx.textAlign = "center";              //设置或返回文本内容的当前对齐方式
        this.ctx.textBaseline = "middle";           //设置或返回在绘制文本时使用的当前文本基线
        this.digits.forEach((digit, i) => {
            const rad = 2 * Math.PI / 12 * i;
            const x = Math.cos(rad) * (this.r - 33 * this.rem);
            const y = Math.sin(rad) * (this.r - 33 * this.rem);
            this.ctx.fillText(digit, x, y);        //在画布上绘制"被填充的"文本
        });

        //分钟的刻度，每分钟转6deg
        for (let i = 0; i < 60; i++) {
            this.ctx.save();                        //保存当前环境的状态
            this.ctx.rotate(6 * i * Math.PI / 180); //旋转当前绘图
            this.ctx.beginPath();                   //起始一条路径，或重置当前路径
            this.ctx.moveTo(0, -82 * this.rem);     //把路径移动到画布中的指定点，不创建线条
            this.ctx.lineTo(0, -87 * this.rem);     //添加一个新点，然后在画布中创建从该点到最后指定点的线条
            this.ctx.closePath();                   //创建从当前点回到起始点的路径
            this.ctx.strokeStyle = '#000';          //设置或返回用于笔触的颜色、渐变或模式
            this.ctx.lineWidth = 1 * this.rem;      //设置或返回当前的线条宽度
            this.ctx.stroke();                      //绘制已定义的路径
            this.ctx.restore();                     //返回之前保存过的路径状态和属性
        }
        //小时的刻度，每小时转30deg
        for (let i = 0; i < 12; i++) {
            this.ctx.save();
            this.ctx.rotate(30 * i * Math.PI / 180);
            this.ctx.beginPath();
            this.ctx.moveTo(0, -79 * this.rem);
            this.ctx.lineTo(0, -87 * this.rem);
            this.ctx.closePath();
            this.ctx.strokeStyle = '#000';
            this.ctx.lineWidth = 2 * this.rem;
            this.ctx.stroke();
            this.ctx.restore();
        }
    }

    // 
    drawHour(hour, minute) {
        this.ctx.save();
        this.ctx.beginPath();
        const hRad = 2 * Math.PI / 12 * hour;
        const mRad = 2 * Math.PI / 12 / 60 * minute;
        this.ctx.rotate(hRad + mRad);
        this.ctx.lineWidth = 6 * this.rem;
        this.ctx.lineCap = "round";                 //设置或返回线条的结束端点样式
        this.ctx.moveTo(0, 10 * this.rem);
        this.ctx.lineTo(0, -this.r / 2);
        this.ctx.stroke();
        this.ctx.restore();
    }

    // 
    drawMinute(minute) {
        this.ctx.save();
        this.ctx.beginPath();
        const rad = 2 * Math.PI / 60 * minute;
        this.ctx.rotate(rad);
        this.ctx.lineWidth = 3 * this.rem;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(0, 10 * this.rem);
        this.ctx.lineTo(0, -this.r + 26 * this.rem);
        this.ctx.stroke();
        this.ctx.restore();
    }

    // 
    drawSecond(second) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = "#c14543";
        const rad = 2 * Math.PI / 60 * second;
        this.ctx.rotate(rad);
        this.ctx.moveTo(-3 * this.rem, 20 * this.rem);
        this.ctx.lineTo(3 * this.rem, 20 * this.rem);
        this.ctx.lineTo(1, -this.r + 26 * this.rem);
        this.ctx.lineTo(-1, -this.r + 26 * this.rem);
        this.ctx.fill();    //填充当前绘图（路径）
        this.ctx.restore();
    }

    // 
    drawDot() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#fff";
        this.ctx.arc(0, 0, 3 * this.rem, 0, 2 * Math.PI, false);
        this.ctx.fill();
    }
}