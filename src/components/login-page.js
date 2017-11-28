import React from 'react';
import { connect } from 'react-redux';

import customAxios from '../network/axios';
import { login } from '../actions/auth';
import { history } from '../routers/app-router';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginError: ''
        }
    }

    login = async () => {
        try {
            const loginResponse = await customAxios.post('/login', { email: this.state.email, password: this.state.password });

            if (loginResponse && loginResponse.status === 200) {
                this.props.login(loginResponse.data.user._id);
                history.push('/');
            } else {
                this.setState({ loginError: 'There was a problem logging you in' });
            }
        } catch (err) {
            this.setState({ loginError: 'Invalid email or password' });
        }
    }

    emailChanged = (e) => {
        this.setState({ email: e.target.value });
    }

    passwordChanged = (e) => {
        this.setState({ password: e.target.value });
    }

    onKeyDown = (e) => {
        if (e.keyCode === 13) {
            this.login();
        }
    }

    render() {
        return (
            <div className="box-layout box-layout--vertical">
                <div className="box-layout">
                    <div className="box-layout__box form__fieldset-container">
                        <h1 className="form__fieldset-title">Login</h1>
                        { this.state.loginError && <span>{this.state.loginError}</span> }
                        <div className="form__fieldset">
                            <input className="text-input" type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.emailChanged} onKeyDown={this.onKeyDown} />
                        </div>
                        <div className="form__fieldset">
                            <input className="text-input" type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.passwordChanged} onKeyDown={this.onKeyDown} />
                        </div>
                    </div>
                </div>
                <div className="box-layout">
                    <div className="box-layout__box">
                        <input className="button" type="button" value="Login" onClick={this.login} />
                    </div>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (id) => dispatch(login(id))
});

const mappedComponent = connect(undefined, mapDispatchToProps)(LoginPage);

export { LoginPage, mappedComponent as default };
