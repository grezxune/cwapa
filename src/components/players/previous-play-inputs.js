import React from 'react';
import { Field } from 'formik';

const PreviousPlayInputs = ({ values, onChange }) => {
    return (
        <div className="box-layout__box form__fieldset-container">
            <span className="form__fieldset-title">Previous Play</span>

            <div className="form__fieldset form__fieldset--alt">
                <label className="horizontal-container">
                    <Field type="checkbox" name="previousPlay.havePlayedBefore" onChange={onChange} checked={values.previousPlay.havePlayedBefore} />
                    <span>I have played APA before</span>
                </label>
            </div>
            <div className="form__fieldset">
                <Field className="text-input" type="text" name="previousPlay.location" placeholder="Previous Location of Play" disabled={!values.previousPlay.havePlayedBefore} onChange={onChange} />
                <Field className="text-input" type="text" name="previousPlay.lastYearOfPlay" placeholder="Last Year of Play" disabled={!values.previousPlay.havePlayedBefore} onChange={onChange} />
                <label className="horizontal-container horizontal-container--centered">
                    <span>Previous Skill Level</span>
                    <Field
                        component="select"
                        className="select"
                        name="previousPlay.lastSkillLevel"
                        disabled={!values.previousPlay.havePlayedBefore}
                        onChange={onChange}>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="IDR">I don't remember</option>
                    </Field>
                </label>
            </div>
        </div>
    );
};

export default PreviousPlayInputs;