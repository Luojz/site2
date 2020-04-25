import React from 'react';
import {announceURL} from '@/config/apis'

export default ({ match }) => {
    const src = `${announceURL}/${match.params.id}`

    return (
        <iframe src={src}></iframe>
    )
}