import React from 'react';
import { Field } from 'formik';

const NameInputs = ({ touched, errors, values, onChange }) => {
    return (
        <div className="box-layout__box form__fieldset-container">
            <span className="form__fieldset-title">Name</span>

            <div className="form__fieldset">
                { touched && touched.name && touched.name.first && errors && errors.name && errors.name.first && <p className="error-text">{errors.name.first}</p> }
                <Field className="text-input" type="text" name="name.first" placeholder="First (Required)" />

                <Field className="text-input" type="text" name="name.middle" placeholder="Middle" onChange={onChange} />

                { touched && touched.name && touched.name.last && errors && errors.name && errors.name.last && <p className="error-text">{errors.name.last}</p> }
                <Field className="text-input" type="text" name="name.last" placeholder="Last (Required)" onChange={onChange} />

                <Field className="text-input" type="text" name="name.nickname" placeholder="Nickname" onChange={onChange} />
            </div>
        </div>
    );
};

export default NameInputs;