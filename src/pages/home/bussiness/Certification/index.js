import React from 'react'
import Figure from '@/components/Figure'
import Squares from '@/components/Squares'
import Headline from '@/components/Headline'
import mock from './mock.js'
import {replace} from '@/utils/URL'


export default ({ data = mock }) => (
    <section id="home-certification">
        <Headline data={data} />
        <Squares data={data}>
            {({ data }) => (
                <a href={replace(data.link)}>
                    <Figure src={data.src} desc={data.desc} />
                </a>
            )}
        </Squares>
    </section>
)