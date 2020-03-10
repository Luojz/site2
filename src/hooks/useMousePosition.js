import React, { useState, useEffect } from 'react'


export default function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const methods = {
        updateMousePosition(e) {
            setPosition({ x: e.clientX, y: e.clientY })
        }
    }

    useEffect(() => {
        document.addEventListener('mousemove', methods.updateMousePosition)

        return () => {
            document.removeEventListener('mousemove', methods.updateMousePosition)
        }
    })

    return position
}

/** Usage: useMousePostion
 * 
 */