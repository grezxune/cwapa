import React from 'react';
import { Field } from 'formik';

class ContactInputs extends React.Component {
    getMessages = () => {
        const touched = this.props.touched;
        const errors = this.props.errors;

        return {
            email: touched && touched.contact && touched.contact.email && errors && errors.contact && errors.contact.email ? errors.contact.email : '',
            phones: touched && touched.contact && touched.contact.phones && errors && errors.contact && errors.contact.phones ? errors.contact.phones : ''
        }
    }

    render () {
        return (
            <div className="box-layout__box form__fieldset-container">
                <span className="form__fieldset-title">Contact</span>

                <div className="form__fieldset--alt">
                    { this.getMessages().email && <p className="error-text">{this.getMessages().email}</p> }
                    <Field className="text-input" type="email" name="contact.email" placeholder="Email (Required)" onChange={this.props.onChange} />

                    <span>One primary phone required</span>
                    { this.props.errors && this.props.errors.customContact && this.props.errors.customContact.phones && <p className="error-text">{this.props.errors.customContact.phones}</p> }
                    <div>
                        <Field className="text-input" type="text" name="contact.phones.cell.number" placeholder="Cell #" onChange={this.props.onChange} />
                        <label className="horizontal-container">
                            <Field type="checkbox" name="contact.phones.cell.isPrimary" onChange={this.props.onChange} checked={this.props.values.contact.phones.cell.isPrimary} />
                            <span>Primary</span>
                        </label>
                    </div>

                    <div>
                        <Field className="text-input" type="text" name="contact.phones.home.number" placeholder="Home #" onChange={this.props.onChange} />
                        <label className="horizontal-container">
                            <Field type="checkbox" name="contact.phones.home.isPrimary" onChange={this.props.onChange} checked={this.props.values.contact.phones.home.isPrimary} />
                            <span>Primary</span>
                        </label>
                    </div>

                    <div>
                        <Field className="text-input" type="text" name="contact.phones.work.number" placeholder="Work #" onChange={this.props.onChange} />
                        <Field className="text-input" type="text" name="contact.phones.work.ext" placeholder="Ext" onChange={this.props.onChange} />
                        <label className="horizontal-container">
                            <Field type="checkbox" name="contact.phones.work.isPrimary" onChange={this.props.onChange} checked={this.props.values.contact.phones.work.isPrimary} />
                            <span>Primary</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    };
}

export default ContactInputs;