import React from 'react';
import { Field } from 'formik';

const AddressInputs = ({ touched, errors, values, onChange }) => {
    return (
        <div className="box-layout__box form__fieldset-container">
            <span className="form__fieldset-title">Address</span>
            <div className="form__fieldset">
                { touched && touched.address && touched.address.street && errors && errors.address && errors.address.street && <p className="error-text">{errors.address.street}</p> }
                <Field className="text-input" type="text" name="address.street" placeholder="Street (Required)" onChange={onChange} />

                { touched && touched.address && touched.address.city && errors && errors.address && errors.address.city && <p className="error-text">{errors.address.city}</p> }
                <Field className="text-input" type="text" name="address.city" placeholder="City (Required)" onChange={onChange} />

                { touched && touched.address && touched.address.state && errors && errors.address && errors.address.state && <p className="error-text">{errors.address.state}</p> }
                <Field className="text-input" type="text" name="address.state" placeholder="State (Required)" onChange={onChange} />

                { touched && touched.address && touched.address.zipCode && errors && errors.address && errors.address.zipCode && <p className="error-text">{errors.address.zipCode}</p> }
                <Field className="text-input" type="text" name="address.zipCode" placeholder="Zip Code (Required)" onChange={onChange} />
            </div>
        </div>
    );
};

export default AddressInputs;