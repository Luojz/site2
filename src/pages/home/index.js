import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/default';
import { asyncData } from '../../plugins/axios';
import adapter from './adapter'


export default ({ location }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const api = location.pathname === '/preview' ? '/preview!_index.json' : '/_index.json'
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
            .catch((err) => { alert(err) })
    }, [])

    return (
        <Layout hidden={loading}>
            {data.map(({ id, type, Component, data }) => <Component data={data} key={id || type} />)}
        </Layout>
    )
}