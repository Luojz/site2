import React, { useState, useEffect } from 'react';
import { asyncData } from '../../plugins/axios';
import Layout from '../../layouts/default';


export default ({ location }) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const api = `${location.pathname}.json`
        setLoading(true)
        asyncData(api)
            .then((res) => {
                if (res.redirect) {
                    window.location.href = res.redirect
                } else {
                    setLoading(false)
                    setData(res)
                }
            })
            .catch((err) => { window.location.href = '/' })
    }, [])

    return (
        <Layout hidden={loading}>
            {JSON.stringify(data)}
        </Layout>
    )
}