import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './serviceWorker';
import Routes from './routes';
import './index.less';


ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);

unregister();
