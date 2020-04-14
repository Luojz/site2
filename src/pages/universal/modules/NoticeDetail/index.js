import React, { useEffect, useState } from 'react';
import { asyncData } from '@/plugins/axios'
import './index.less';
import { isDev } from '@/config/apis'

const api = isDev ? '/universal/noticeDetail' : '/notice/get'

export default () => {
    const [data, setData] = useState({ title: '', content: '' })
    
    useEffect(() => {
        asyncData(`${api}/${window.location.search.split('=')[1].split('&')[0]}${isDev ? '.json' : ''}`).then(res => setData(res.data))
    }, [])

    return (
        <section id="noticeDetail">
            <h3>{data.title}</h3>
            <h4>{data.updateTime}</h4>
            <div className="raw-html" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </section>
    )
};