import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/default/index.css';
import './assets/css/default/common.css';
import './assets/css/icon/iconfont.css';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import {Provider} from 'react-redux';
import store from './store';

React.Component.prototype.$axios = axios;
axios.defaults.withCredentials = true;
axios.interceptors.request.use((config)=>{
    config.url = '/cm'+config.url;
    return config;
});
axios.interceptors.response.use(({data})=>{
    return data;
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
