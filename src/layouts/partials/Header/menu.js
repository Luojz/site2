import React, { Component } from 'react'
import './index.less'
const topMenuData = require('./topNavData.json');
const $ = require('jquery');

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
        }
    }
    showMask=()=>{
        this.props.showMaskFun(false)
    };
    //一级菜单显示或者隐藏
    showSeconedMenu=(e)=>{

        console.log(e.target);
        $(e.target).parent().next().toggle();

        if($(e.target).parent().next().css("display") === "block"){
            $(e.target).parent().addClass("r-arrow-up")
            $(e.target).parent().removeClass("r-arrow-down")
        } else {
            $(e.target).parent().addClass("r-arrow-down")
            $(e.target).parent().removeClass("r-arrow-up")
        }

    };

    render () {

        let showM = this.props.isShow === true ? "block":"none";

        return (
            <div className="c-nav-wrap-m c-nav" style={{display:showM}}>
                <div className="c-nav-mod c-nav-mod-m">
                    <div id="qcTopNavMOpera" className="c-nav-inner">
                        <div className="c-nav-right">
                            <a className="c-nav-close" onClick={this.showMask}>✕</a>
                        </div>
                    </div>
                    <div className="c-nav-m-wrap search-out">
                        {
                            topMenuData.map((item, index)=>
                                <div className="c-nav-m-menu" key={index}>
                                    {
                                        item.children && item.children.length > 0 ?
                                            <div className="m-tit-level-1 J-qcMenuTitle">
                                                <a onClick={this.showSeconedMenu.bind(this)}>{item.title}</a>
                                            </div>
                                            :
                                            <div className="m-tit-level-1 J-qcMenuTitle noafter">
                                                <a href={item.link}>{item.title}</a>
                                            </div>
                                    }

                                    {item.children && item.children.length > 0 ?
                                        <div className="m-menu-ctrl J-qcMenuList">
                                            {
                                                item.children.map((item2, index2)=>
                                                    <div key={index2}>
                                                        <div className="m-tit-level-2 J-qcMenuTitle hasitem"><span className="titleSecond" onClick={this.showSeconedMenu.bind(this)}>{item2.title}</span></div>
                                                        <div className="m-menu-ctrl J-qcMenuList">
                                                            {item2.children && item2.children.map((item3, index3)=>
                                                                <div className="m-tit-level-3 J-qcMenuTitle" key={index3}>
                                                                    <a href={item3.link.replace('//yun.ccb.com', '//localhost:3000')}>{item3.title}</a>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        : ""
                                    }
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;