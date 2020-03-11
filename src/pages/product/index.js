import React, { useState, useEffect } from 'react';
import { asyncData } from '../../plugins/axios';
import Layout from '../../layouts/default';

import Banner from './modules/Banner';
import adapter from './adapter'

export default ({ location }) => {
    const [data, setData] = useState();
    const [bannerData,setBannerData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = location.pathname;
        const api = location.search ? `${url}${location.search.replace("?!", "_")}.json` : `${url}.json`;
        const bannerDataApi = `${url}_banner.json`;
        setLoading(true)
        asyncData(api)
            .then((res) => {
                if (res.redirect) {
                    window.location.href = res.redirect
                } else {
                    setLoading(false);
                    setData(adapter(res.blocks));
                }
            })
            .catch((err) => {
                //  window.location.href = '/';
            })
        asyncData(bannerDataApi)
            .then((res) => {
                if (res.redirect) {
                    window.location.href = res.redirect
                } else {
                    setLoading(false)
                    setBannerData(res)
                }
            })
            .catch((err) => {
                //  window.location.href = '/';
            })
    }, [])
    return (
        <Layout hidden={loading}>
            {bannerData && <Banner data={bannerData} />}
            {data && data.map(({ id, Component, data }) => <Component data={data} key={id} />)}
        </Layout>
    )
}