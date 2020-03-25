import React, { useState, useEffect } from 'react';
import { asyncData } from '@/plugins/axios';
import Layout from '@/layouts/default';
import adapter from './adapter';


export default ({ location }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const api = location.search.includes('?!preview') ? `${location.pathname}_preview.json` : `${location.pathname}.json`
        setLoading(true)
        asyncData(api)
            .then((res) => {
                if (res.redirect) {
                    window.location.href = res.redirect
                } else {
                    setLoading(false)
                    setData(adapter(res.block.root.childBlocks))
                }
            })
            // .catch((err) => { window.location.href = '/' })
    }, [location.pathname, location.search])

    return (
        <Layout hidden={loading}>
            {data.map(({ id, type, Component, data }) => <Component data={data} key={id || type} />)}
        </Layout>
    )
}