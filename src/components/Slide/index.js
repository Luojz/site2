import React, { useState, useEffect } from 'react'
import './index.less'


export default ({ Slot, data }) => {
    const [list, setList] = useState(data.map((item, id) => ({ id, item })))
    const [start, setStart] = useState({ pageX: 0, pageY: 0 })
    const [end, setEnd] = useState({ pageX: 0, pageY: 0 })
    const [slideX, setSlideX] = useState(false)
    const [slideY, setSlideY] = useState(false)
    const [current, setCurrent] = useState(undefined)

    const methods = {
        handleTouchStart(e) {
            setStart(e.changedTouches[0]);
            setSlideX(true)
            setSlideY(true)
        },
        handleTouchMove(e) {
            setEnd(e.changedTouches[0])
            const dx = end.pageX - start.pageX
            const dy = end.pageY - start.pageY
            const dt = Math.abs(dx) - Math.abs(dy)
            // 左右滑动
            if (slideX && dt > 0) {
                // 阻止事件冒泡
                e.stopPropagation();
                if (dx > 10) {   //右滑
                    e.preventDefault();
                }
                if (dx < -10) {   //左滑
                    e.preventDefault();
                }
                setSlideY(false)
            }
            // 上下滑动
            if (slideY && dt < 0) {
                setSlideX(false)
            }
        },
        handleDelete(id) {
            setList(list.filter(item => item.id != id))
        }
    }

    return (
        <ul className="slide">
            {list.map(({ id, item }) => (
                <li
                    key={id}
                    className={`slide-item ${current == id ? 'swipeleft' : ''}`}
                    onTouchStart={(e) => {
                        setCurrent(id)
                        methods.handleTouchStart(e)
                    }}
                    onTouchMove={methods.handleTouchMove}
                >
                    <p>
                        <Slot slotProps={item} />
                        <i onClick={() => methods.handleDelete(id)}>删除</i>
                    </p>
                </li>
            ))}
        </ul>
    )
}