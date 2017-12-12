import React from 'react';
import { Field } from 'formik';

const FriendInterestedInputs = ({ touched, errors, values, onChange }) => {
    return (
        <div className="box-layout__box form__fieldset-container">
            <span className="form__fieldset-title">Friend Interested</span>

            <div className="form__fieldset">
                <Field className="text-input" type="text" name="friendInterested.name.first" placeholder="First" onChange={onChange} />
                <Field className="text-input" type="text" name="friendInterested.name.last" placeholder="Last" onChange={onChange} />
                <Field className="text-input" type="text" name="friendInterested.name.nickname" placeholder="Nickname" onChange={onChange} />
                <Field className="text-input" type="text" name="friendInterested.phone" placeholder="Phone" onChange={onChange} />
            </div>
        </div>
    );
};

export default FriendInterestedInputs;