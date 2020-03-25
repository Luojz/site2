import React, { useState, useEffect } from 'react';
import { asyncData } from '../../plugins/axios';
import Layout from '../../layouts/default';
import Banner from './modules/Banner/index';
import adapter from './adapter.ts';

export default ({ location }) => {
    const [data, setData] = useState([]);
    const [bannerData, setBannerData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = location.pathname;
        const api = location.search.includes("?!preview") ? `${url}_preview.json` : `${url}.json`;

        const bannerDataApi = `${url}_banner.json`;
        setLoading(true)
        asyncData([api, bannerDataApi])
            .then(([res, res2]) => {
                if (res.redirect) {
                    window.location.href = res.redirect
                } else {
                    setLoading(false)
                    setData(adapter(res))
                    setBannerData(res2)
                }
            })
            // .catch((err) => {window.location.href = '/';})
    }, [location.pathname, location.search])
    return (
        <Layout hidden={loading}>
            <div className="product-body">
                {bannerData && <Banner data={bannerData} />}
                {data.map(({ id, type, Component, data }) => <Component data={data} key={id || type} />)}
            </div>
        </Layout>
    )
}
