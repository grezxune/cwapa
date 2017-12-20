import React from 'react';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { toast } from 'react-toastify';

import customAxios from '../network/axios';
import { login } from '../actions/auth';
import { history } from '../routers/app-router';

class LoginPage extends React.Component {
    render() {
        return (
            <div className="box-layout">
                <Form className="box-layout__box form__fieldset-container">
                    <h1 className="form__fieldset-title">Login</h1>

                    { this.props.errors.loginError && <p className="error-text">{ this.props.errors.loginError }</p> }

                    <div className="form__fieldset">
                        { this.props.touched.email && this.props.errors.email && <p>{ this.props.errors.email }</p> }
                        <Field className="text-input" type="email" name="email" placeholder="Email" />
                    </div>

                    <div className="form__fieldset">
                        { this.props.touched.password && this.props.errors.password && <p>{ this.props.errors.password }</p> }
                        <Field className="text-input" type="password" name="password" placeholder="Password" />
                    </div>

                    <button className="button" disabled={this.props.isSubmitting}>Login</button>
                </Form>
            </div>
        );
    }
};

const FormikLogin = withFormik({
    mapPropsToValues({ login }) {
        return {
            login,
            email: '',
            password: ''
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().required('Password is required')
    }),
    handleSubmit: async (values, { resetForm, setErrors, setSubmitting }) => {
        try {
            const loginResponse = await customAxios.post('/login', { email: values.email, password: values.password });
            setSubmitting(false);

            if (loginResponse && loginResponse.status === 200) {
                values.login(loginResponse.data.user._id);
                history.push('/');
                toast.success('Successfully logged in!');
            } else {
                setErrors({ loginError: 'Email or password is incorrect' });
                toast.error('Error logging in');
            }
        } catch (err) {
            setErrors({ loginError: 'Email or password is incorrect' });
            toast.error('Error logging in');
            setSubmitting(false);
        }
    }
})(LoginPage);

const mapDispatchToProps = (dispatch) => ({
    login: (id) => dispatch(login(id))
});

const mappedComponent = connect(undefined, mapDispatchToProps)(FormikLogin);

export { LoginPage, mappedComponent as default };