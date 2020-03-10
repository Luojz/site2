import React from 'react'
import './index.less'
import mock from './mock.js'


export default ({ data = mock }) => {
    return (
        <footer className="footer">
            <ul>
                {data.map(({ title, children }, idx) => (
                    <li key={idx}>
                        <h3>{title}</h3>
                        <p>
                            {children.map(({ title, link }, i) => (
                                <a href={link} key={i}>{title}</a>
                            ))}
                        </p>
                    </li>
                ))}
            </ul>
            <p>部分产品仅限建行集团内部使用</p>
            <p>© 版权所有中国建设银行</p>
            <p className="flex-container">
                <span>京ICP备13030780号</span>
                <span>京公安备案：110102000450</span>
            </p>
        </footer>
    )
}