import React, { useState, useEffect } from 'react';
import { asyncData } from '../../plugins/axios';
import Layout from '../../layouts/default';
import Banner from './modules/Banner/index';
import adapter from './adapter.ts';

export default ({ location }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = location.pathname;
        const api = location.search.includes("?!preview") ? `${url}_preview.json` : `${url}.json`;
        const bannerDataApi = `${url}_banner.json`;

        // setLoading(true)
        asyncData([api, bannerDataApi])
            .then(([res, res2]) => {
                if (res.redirect) {
                    window.location.href = res.redirect
                } else {
                    setLoading(false)
                    setData([{ id: 'banner', type: 'Banner', Component: Banner, data: res2 }, ...adapter(res)])
                }
            })
            // .catch((err) => {window.location.href = '/';})
    }, [])
    return (
        <Layout hidden={loading}>
            {data.map(({ id, type, Component, data }) => <Component data={data} key={id || type} />)}
        </Layout>
    )
}
