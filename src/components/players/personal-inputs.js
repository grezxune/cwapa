import React from 'react';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class PersonalInputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: props.values.personal.birthdate ? moment(props.values.personal.birthdate) : null
        }
    }

    onDateChange = (date) => {
        this.setState({ date });

        if (date) {
            this.props.setFieldValue('personal.birthdate', date.valueOf());
        }
    }

    onDateClick = () => {
        this.props.setTouched({
            ...this.props.touched,
            personal: {
                ...this.props.touched.personal,
                birthdate: true
            }
        });
    }

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    render() {
        return (
            <div className="box-layout__box form__fieldset-container">
                <span className="form__fieldset-title">Personal</span>

                <div className="form__fieldset">
                    { this.props.touched && this.props.touched.personal && this.props.touched.personal.birthdate && this.props.errors && this.props.errors.personal && this.props.errors.personal.birthdate && <p className="error-text">{this.props.errors.personal.birthdate}</p>}
                    <DatePicker 
                        className="react-datepicker"
                        onBlur={this.onDateClick}
                        selected={this.state.date}
                        onChange={this.onDateChange}
                        className="text-input"
                        placeholderText="Birthdate (Required)"
                    />

                    { this.props.touched && this.props.touched.personal && this.props.touched.personal.gender && this.props.errors && this.props.errors.personal && this.props.errors.personal.gender && <p className="error-text">{this.props.errors.personal.gender}</p>}
                    <Field
                        component="select"
                        className="select"
                        name="personal.gender"
                        onChange={this.props.onChange}>
                        <option value="Gender">Gender (Required)</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Field>

                    { this.props.touched && this.props.touched.personal && this.props.touched.personal.legalStatus && this.props.errors && this.props.errors.personal && this.props.errors.personal.legalStatus && <p className="error-text">{this.props.errors.personal.legalStatus}</p>}
                    <Field
                        component="select"
                        className="select"
                        name="personal.legalStatus"
                        onChange={this.props.onChange}>
                        <option value="Legal Status">Legal Status (Required)</option>
                        <option value="Married">Married</option>
                        <option value="Single">Single</option>
                        <option value="Separated">Separated</option>
                        <option value="Widowed">Widowed</option>
                    </Field>

                    <Field className="text-input full-width" type="text" name="personal.employment.place" placeholder="Place of Employment" onChange={this.props.onChange} />
                    <Field className="text-input full-width" type="text" name="personal.employment.occupation" placeholder="Occupation" onChange={this.props.onChange} />
                </div>
            </div>
        );
    }
};

export default PersonalInputs;