import React from 'react';
import './index.less';

interface IProps {
    data:{
        "mod": string;
        "title": string;
        "content": string;
    }
}

export default (props:IProps) => {

    const data = props.data;
    console.log(props);

    return (
        <div className="raw-html" dangerouslySetInnerHTML={{__html:data.content}}></div>
    )
};