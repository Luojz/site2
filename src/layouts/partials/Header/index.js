import React, { useState } from 'react'
import './index.less'
import Menu from './menu.js'
import Mask from './mask.js'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
        }
    }
    showMask=(show)=>{
        this.setState({
            isShow: show
        })

    };
    render () {

        let { isShow } = this.state;

        return (
            <div className="headerNav">
                <a href="//m.yun.ccb.com" className="logoA">
                    <img className="logo" src="/icons/logo.png" />
                </a>
                <div className="menuPart">
                    <a href="http://console.yun.ccb.com" className="logina">
                        <img className="login" src="/icons/icon_login.png" />
                    </a>
                    <div className="menu" onClick={this.showMask.bind(this,true)}>
                        <img className="menuHeader" src="/icons/icon_menu.png" />
                    </div>
                </div>
                <Menu isShow={isShow} showMaskFun={this.showMask} />
                <Mask isShow={isShow} />
            </div>
        )
    }
}

export default Header;