import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('jwt');

axios.defaults.baseURL = 'http://localhost:3000/api';

axios.interceptors.request.use(config => {
    config.headers.authorization = token;
    return config;
}, error => {
    return Promise.reject(error);
})
    

export default function (Component) {
    return class Authenticated extends React.Component {
        render() {
            const notLoggedIn = <div>Please login in to see user list</div>;
                return<> {token ? <Component {...this.props }/> : notLoggedIn }</>
        }
    };
}
