import React, { useState, useEffect, useRef } from 'react'
import { debounce } from '../../utils/Function.js'
import './index.less'


export default (
    {
        radius = 20,
        progress = 20,
        barColor = '#1890ff',
        backgroundColor = 'rgba(0,0,0,0.3)',
        isAnimation = true,
        isRound = true,
        id = 1,
        duration = 1000,
        delay = 200,
        timeFunction = 'cubic-bezier(0.99, 0.01, 0.22, 0.94)',
        circleWidth = 100,
        color = '#000',
        fontSize = '18px',
        children
    }
) => {
    const [width, setWidth] = useState(circleWidth)
    const idStr = `circle_progress_keyframes_${id}`
    const boxRef = useRef(null)
    const barRef = useRef(null)


    const methods = {
        setCircleWidth() {
            const box = boxRef.current;
            const width = box.clientWidth;
            const height = box.clientHeight;
            const cW = width > height ? height : width;
            setWidth(cW);
        },

        setAnimation() {
            if (isAnimation) {
                // 重复定义判断
                if (document.getElementById(idStr)) {
                    console.warn("vue-circle-progress should not have same id style");
                    document.getElementById(idStr).remove();
                }
                // 生成动画样式文件
                const style = document.createElement("style");
                style.id = idStr;
                style.type = "text/css";
                style.innerHTML = `
        @keyframes circle_progress_keyframes_name_${id} {
        from {stroke-dashoffset: ${(width - radius) * 3.14}px;}
        to {stroke-dashoffset: ${((width - radius) *
                        3.14 *
                        (100 - progress)) /
                    100}px;}}
        .circle_progress_bar${
                    id
                    } {animation: circle_progress_keyframes_name_${id} ${
                    duration
                    }ms ${delay}ms ${timeFunction} forwards;}`;
                // 添加新样式文件
                document.getElementsByTagName("head")[0].appendChild(style);
                // 往svg元素中添加动画class
                barRef.current.classList.add(`circle_progress_bar${id}`);
            }
        }
    }


    useEffect(() => {
        methods.setCircleWidth();
        methods.setAnimation();
        // 此处不能使用window.onresize
        window.addEventListener(
            "resize",
            debounce(() => {
                methods.setCircleWidth();
                methods.setAnimation();
            }, 300)
        );

        return () => {
            // 清除旧组件的样式标签
            document.getElementById(idStr) &&
                document.getElementById(idStr).remove();
            window.addEventListener("resize", () => { });
        }
    }, [])

    return (
        <div className="circleProgress-content" ref={boxRef}>
            <svg
                style={{ transform: 'rotate(-90deg)' }}
                width={width}
                height={width}
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    r={(width - radius) / 2}
                    cy={width / 2}
                    cx={width / 2}
                    strokeWidth={radius}
                    stroke={backgroundColor}
                    fill="none"
                />
                <circle
                    ref={barRef}
                    r={(width - radius) / 2}
                    cy={width / 2}
                    cx={width / 2}
                    stroke={barColor}
                    strokeWidth={radius}
                    strokeLinecap={isRound ? 'round' : 'square'}
                    strokeDasharray={(width - radius) * 3.14}
                    strokeDashoffset={isAnimation ? (width - radius) * 3.14 : (width - radius) * 3.14 * (100 - progress) / 100}
                    fill="none"
                />
            </svg>
            <div className="cirecleProgress-center_text" style={{ color, fontSize }}>{children}</div>
        </div >
    )
}