import React, { useState, useEffect } from 'react';
import { asyncData } from '@/plugins/axios';
import Layout from '@/layouts/default';
import Banner from './modules/Banner/index';
import adapter from './adapter.ts';

export default ({ location }) => {
    const [data, setData] = useState([]);
    const [bannerData,setBannerData] = useState();
    const [loading, setLoading] = useState(true);

    const url = location.pathname;
    const api = location.search.includes("?!preview") ? `${url}!preview.json` : `${url}.json`;
    const bannerDataApi = location.search.includes("?!preview") ? `${url}_banner!preview.json` : `${url}_banner.json`;
    useEffect(() => {
        asyncData(bannerDataApi)
            .then((res)=>{
                setBannerData(res);
            })
            .catch((err)=>{
                console.log(err);
            })
        asyncData(api)
            .then((res) => {
                setData(adapter(res));
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [])
    return (
        <Layout hidden={loading}>
            { bannerData && <Banner data={bannerData} /> }
            {data.map(({ id, type, Component, data }) => <Component data={data} key={id || type} />)}
        </Layout>
    )
}
