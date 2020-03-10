import React, { useState, useEffect } from 'react'
import './index.less'


export default ({ options }) => {
    const methods = {
        handleInput() {
            // 
        },
    }
    
    return (
        <div class="collection">
            <div class="wrapper">
                <ul class="options">
                    {options.map(({ option, idx }) => (
                        <li class="option" key={idx}>
                            <label>{option.value}</label>
                            <input type="checkbox" onClick="onSelect" checked={option.checked} />
                        </li>
                    ))}
                </ul>
            </div>

            <textarea class="textarea" placeholder="请输入退款原因" placeholder-class="placeholder" onInput={methods.handleInput} />
        </div >
    )
}