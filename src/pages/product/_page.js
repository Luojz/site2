import React, { useState, useEffect } from 'react';
import { asyncData } from '@/plugins/axios';
import Layout from '@/layouts/default';

import Banner from './modules/Banner/index';
import adapter from './adapter'

export default ({ location }) => {
    const [data, setData] = useState();
    const [bannerData,setBannerData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = location.pathname;
        let api = location.search ? `${url}${location.search.replace("?!", "_")}.json` : `${url}.json`;

        //针对非官方的网页，微信会在地址后面增加验证参数
        if(location.search.indexOf('nsukey=')){
            api = `${url}.json`;
        }
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
            <div className="product-body">
                {bannerData && <Banner data={bannerData} />}
                {data && data.map(({ id, Component, data }) => <Component data={data} key={id} />)}
            </div>
        </Layout>
    )
}