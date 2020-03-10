import React from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'


export default ({ hidden = false, children, width = '6.86rem', margin = '0 .32rem' }) => (
    <div className="page" style={{ display: hidden ? 'none' : 'block' }}>
        <Header />
        <main style={{ width, margin }}>{children}</main>
        <Footer />
    </div>
)
