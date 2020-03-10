import React from 'react'
import Figure from '../../../../components/Figure'
import Squares from '../../../../components/Squares'
import Headline from '../../../../components/Headline'
import mock from './mock.js'


export default ({ data = mock }) => (
    <section id="home-certification">
        <Headline data={data} />
        <Squares data={data}>
            {({ data }) => (
                <a href={data.link}>
                    <Figure src={data.src} desc={data.desc} />
                </a>
            )}
        </Squares>
    </section>
)