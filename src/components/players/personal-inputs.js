import React from 'react';
import { Field } from 'formik';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class PersonalInputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            calenddarFocused: false,
            numberOfMonthsForBirthdate: 1,
            date: props.values.personal.birthdate ? moment(props.values.personal.birthdate) : null
        }
    }

    onDateChange = (date) => {
        this.setState({ date });

        if (date) {
            console.log('Setting date in values: ', date);
            this.props.setFieldValue('personal.birthdate', date.valueOf());
        }
    }

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    render() {
        console.log('Personal errors: ', this.props.errors);
        return (
            <div className="box-layout__box form__fieldset-container">
                <span className="form__fieldset-title">Personal</span>

                <div className="form__fieldset--alt">
                    { this.props.errors && this.props.errors.personal && this.props.errors.personal.birthdate && <p className="error-text">{this.props.errors.personal.birthdate}</p>}
                    <label className="horizontal-container">
                        <span>Birthdate</span>
                        <DatePicker 
                            selected={this.state.date}
                            onChange={this.onDateChange}
                            className="text-input"
                            placeholderText="Birthdate"
                        />
                    </label>

                    <label className="horizontal-container">
                        <span>Gender</span>
                        <Field
                            component="select"
                            className="select"
                            name="personal.gender"
                            onChange={this.props.onChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Field>
                    </label>

                    <label className="horizontal-container">
                        <span>Legal Status</span>
                        <Field
                            component="select"
                            className="select"
                            name="personal.legalStatus"
                            onChange={this.props.onChange}>
                            <option value="Married">Married</option>
                            <option value="Single">Single</option>
                            <option value="Separated">Separated</option>
                            <option value="Widowed">Widowed</option>
                        </Field>
                    </label>

                    <Field className="text-input" type="text" name="personal.employment.place" placeholder="Place of Employment" onChange={this.props.onChange} />
                    <Field className="text-input" type="text" name="personal.employment.occupation" placeholder="Occupation" onChange={this.props.onChange} />
                </div>
            </div>
        );
    }
};

export default PersonalInputs;