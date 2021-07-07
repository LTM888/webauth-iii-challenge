import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {
    state = {
        username:'student',
        password: "hired"
    };

    render(){
        return(
            <>
            <form className="box" onSubmit={this.handleSubmit}>
                <h1>Login</h1> 
                <div><label htmlFor="username">Username</label><input id="username" value={this.state.username} onChange={this.handleInputChange} type="text" /></div>
                <div><label htmlFor="password">Password</label><input id="password" value={this.state.password} onChange={this.handleInputChange} type="text" /></div>
                <input type="submit" name="" placeholder="Login"/>
            </form>         
            </>
        );
    };

    handleInputChange = event => {
        const { id, value } = event.target;

        this.setState({ [id]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const endpoint = 'http://localhost:3000/api/auth/login'
        axios.post(endpoint, this.state)
        .then(res => {
            console.log('RESPONSE', res.data);
            localStorage.setItem('jwt', res.data.token);
            this.props.history.push('/users');
        })
        .catch(error => {
            console.log('ERROR', error);
        });
    };
}