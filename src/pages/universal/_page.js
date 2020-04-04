import React, { useState, useEffect } from 'react';
import { asyncData } from '@/plugins/axios';
import Layout from '@/layouts/default';
import adapter from './adapter';


export default ({ location, match }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const api = `universal/${location.search.includes('?!preview') ? 'preview!' : ''}${match.params.page}.json`

        asyncData(api)
            .then((res) => {
                if (res.redirect) {
                    window.location.href = res.redirect
                } else {
                    setLoading(false)
                    switch (match.params.page) {
                        case 'notice':
                            setData(adapter(res.block.root.childBlocks.filter(item => item.type !== 'RawHtml').concat({ id: 'notice', type: 'Notice' })))
                            break
                        case 'noticeDetail':
                            setData(adapter([{ id: 'noticeDetail', type: 'NoticeDetail' }]))
                            break
                        default:
                            setData(adapter(res.block.root.childBlocks))
                    }
                }
            })
            .catch((err) => { 
                // window.location.href = '/' 
                setLoading(false);
            })
    }, [])

    return (
        <Layout hidden={loading}>
            {data.map(({ id, type, Component, data }) => <Component data={data} key={id || type} />)}
        </Layout>
    )
}