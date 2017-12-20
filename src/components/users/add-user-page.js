import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { toast } from 'react-toastify';

import customAxios from '../../network/axios';
import ErrorToast from '../error-toast';

class AddUserPage extends React.Component {
    render() {
        return (
            <div className="box-layout">
                <Form className="form">
                    <div className="box-layout__box vertical-container vertical-container--centered">
                        <span className="subtitle">Add New User</span>

                        { this.props.touched && this.props.touched.email && this.props.errors && this.props.errors.email && <span className="error-text">{this.props.errors.email}</span>}
                        <Field className="text-input" type="text" name="email" placeholder="Email"/>

                        { this.props.touched && this.props.touched.password && this.props.errors && this.props.errors.password && <span className="error-text">{this.props.errors.password}</span>}
                        <Field className="text-input" type="password" name="password" placeholder="Password"/>

                        { this.props.touched && this.props.touched.passwordConfirmation && this.props.errors && this.props.errors.passwordConfirmation && <span className="error-text">{this.props.errors.passwordConfirmation}</span>}
                        <Field className="text-input" type="password" name="passwordConfirmation" placeholder="Password (confirm)"/>

                        <input className="button" type="submit" value="Submit" />
                    </div>
                </Form>
            </div>
        );
    }
}

Yup.addMethod(Yup.mixed, 'sameAs', function (ref, message) {
    return this.test('sameAs', message, function (value) {
        return value === this.resolve(ref);
    });
});

const FormikAddUserPage = withFormik({
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Not a valid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
        passwordConfirmation: Yup.string().sameAs(Yup.ref('password'), 'Passwords must match').required('Password confirmation is required')
    }),
    handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
        try {
            const response = await customAxios.post('/users', { email: values.email, password: values.password });

            if (response && response.errors) {
                setSubmitting(false);
                toast.error(<ErrorToast errors={response.errors} />);
            } else {
                toast.success(`Successfully added user ${values.email}!`);
            }
        } catch (err) {
            setSubmitting(false);
            if (err.response.data && err.response.data.errors) {
                toast.error(<ErrorToast errors={err.response.data.errors} />);
            }
        }
    }
})(AddUserPage);

export {
    AddUserPage,
    FormikAddUserPage as default
};