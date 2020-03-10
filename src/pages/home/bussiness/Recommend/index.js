import React from 'react'
import Headline from '../../../../components/Headline'
import Squares from '../../../../components/Squares'
import './index.less'
import mock from './mock.js'
import { protocol } from '../../../../config/apis'


function Slot({ data }) {
    return (
        <a className="item"
            href={`${protocol}${data.link}`}
            style={{ backgroundImage: `url(${protocol}${data.imgUrl})` }}
        >
            {data.title}
        </a>
    )
}


export default ({ data = mock }) => (
    <section id="home-recommend">
        <Headline data={data} />
        <Squares data={data}>{Slot}</Squares>
    </section>
)
