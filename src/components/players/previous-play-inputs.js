import React from 'react';
import { Field } from 'formik';

const PreviousPlayInputs = ({ values, onChange, touched, errors }) => {
    return (
        <div className="box-layout__box form__fieldset-container">
            <span className="form__fieldset-title">Previous Play</span>

            <div className="form__fieldset">
                <label className="horizontal-container">
                    <Field type="checkbox" name="previousPlay.havePlayedBefore" onChange={onChange} checked={values.previousPlay.havePlayedBefore} />
                    <span>I have played APA before</span>
                </label>

                <Field className="text-input" type="text" name="previousPlay.location" placeholder="Previous Location of Play" disabled={!values.previousPlay.havePlayedBefore} onChange={onChange} />
                <Field className="text-input" type="text" name="previousPlay.lastYearOfPlay" placeholder="Last Year of Play" disabled={!values.previousPlay.havePlayedBefore} onChange={onChange} />

                { touched && touched.previousPlay && touched.previousPlay.lastSkillLevel && errors && errors.previousPlay && errors.previousPlay.lastSkillLevel && <p className="error-text">{errors.previousPlay.lastSkillLevel}</p>}
                <Field
                    component="select"
                    className="select"
                    name="previousPlay.lastSkillLevel"
                    disabled={!values.previousPlay.havePlayedBefore}
                    onChange={onChange}>
                    <option value="Previous Skill Level">Previous Skill Level</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="IDR">I don't remember</option>
                </Field>
            </div>
        </div>
    );
};

export default PreviousPlayInputs;