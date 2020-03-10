import React from 'react';
import ReactDOM from 'react-dom';
import { unregister } from './serviceWorker';
import Routes from './routes.jsx';
import './index.less';


ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);

unregister();
