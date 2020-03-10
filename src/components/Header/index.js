import React from "react";
import Menu from '../Menu'
import Icon from '../Icon'
import "./index.less";


export default () => (
    <header>
        <a href="/">
            <Icon src="/icons/logo.png" width="2.75rem" />
        </a>
        <div>
            <a href="#">
                <Icon src="/icons/login.png" />
            </a>
            <Menu />
        </div>
    </header>
)
