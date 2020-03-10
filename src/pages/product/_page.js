import React, { useState, useEffect } from 'react';
import { asyncData } from '../../plugins/axios';
import Layout from '../../layouts/default';
// import Drag from '../../components/Drag';
// import Counter from '../../components/Counter';
// import Timer from '../../components/Timer';
// import Text from '../../components/Basic/Text.jsx'


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
            {/* <Drag />
            <Counter />
            <Text>
                fdsfsf\n
                fdsfdsfa
                <p>dfsfsfdsf</p>
                fdsafdda
            </Text>
            <Timer />
            {JSON.stringify(data)} */}
            ddddddd
        </Layout>
    )
}