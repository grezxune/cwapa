import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

import customAxios from '../../network/axios';
import NameInputs from './name-inputs';
import ContactInputs from './contact-inputs';
import AddressInputs from './address-inputs';
import PersonalInputs from './personal-inputs';
import PreviousPlayInputs from './previous-play-inputs';
import FriendInterestedInputs from './friend-interested-inputs';

import 'formik/dist/formik';

const PlayerForm = ({ player, values, errors, touched, isSubmitting, handleChange, setFieldValue, onRemove }) => {
    return (
        <div className="box-layout">
            <Form className="form">
                { errors && errors.request && (
                    <div className="box-layout">
                        <div className="box-layout__box">
                            <p className="error-text">{errors.request}</p>
                        </div>
                    </div>)}

                <div className="box-layout">
                    <NameInputs errors={errors} touched={touched} values={values} onChange={handleChange} />
                    <ContactInputs errors={errors} touched={touched} values={values} onChange={handleChange} />
                    <AddressInputs errors={errors} touched={touched} values={values} onChange={handleChange} />
                    <PersonalInputs errors={errors} touched={touched} values={values} onChange={handleChange} setFieldValue={setFieldValue} />
                    <PreviousPlayInputs errors={errors} touched={touched} values={values} onChange={handleChange} />
                    <FriendInterestedInputs errors={errors} touched={touched} values={values} onChange={handleChange} />
                </div>

                <div className="box-layout">
                    <div className="box-layout__box">
                        <button className="button" disabled={isSubmitting}>Submit</button>
                        { player && (
                            <input type="button" className="button button--danger" value="Remove" onClick={onRemove} />
                        )}
                    </div>
                </div>
            </Form>
        </div>
    );
}

const FormikPlayerForm = withFormik({
    // validate: (values, props) => {
    //     const errors = {};

    //     if ((!values.contact.phones.cell.number || !values.contact.phones.cell.isPrimary) &&
    //         (!values.contact.phones.home.number || !values.contact.phones.home.isPrimary) &&
    //         (!values.contact.phones.work.number || !values.contact.phones.work.isPrimary)) {
    //         errors.customContact = { phones: 'At least one primary phone required'};
    //     }

    //     const today = moment();
    //     const birthdate = moment(values.personal.birthdate);
    //     const difference = today.diff(birthdate, 'years');

    //     if (birthdate.isValid() && difference < 12) {
    //         errors.customPersonal = { birthdate: 'You must be at least 12 years old to sign up for the APA'};
    //     } else if (!birthdate.isValid()) {
    //         // errors.personal = { birthdate: 'Birthdate is required' };
    //     }

    //     console.log('Errors from validation: ', errors);
    //     return errors;
    // },
    mapPropsToValues({ player }) {
        console.log('Player in PlayerForm-2!: ', player);
            const name = player && player.name ? player.name : {
                first: '',
                middle: '',
                last: '',
                nickname: ''
            };

        console.log('NAME: ', name);
        return {
            name: player && player.name ? player.name : {
                first: '',
                middle: '',
                last: '',
                nickname: ''
            },
            contact: player && player.contact ? player.contact : {
                email: '',
                phones: {
                    home: {
                        isPrimary: false,
                        number: ''
                    },
                    cell: {
                        isPrimary: false,
                        number: ''
                    },
                    work: {
                        isPrimary: false,
                        number: '',
                        ext: ''
                    }
                },
            },
            address: player && player.address ? player.address : {
                street: '',
                city: '',
                state: '',
                zipCode: ''
            },
            personal: player && player.personal ? player.personal : {
                birthdate: null,
                gender: 'Male',
                legalStatus: 'Single',
                employment: {
                    place: '',
                    occupation: ''
                }
            },
            previousPlay: player && player.previousPlay ? player.previousPlay : {
                havePlayedBefore: false,
                location: '',
                lastYearOfPlay: '',
                lastSkillLevel: '4'
            },
            friendInterested: player && player.friendInterested ? player.friendInterested : {
                name: {
                    first: '',
                    last: '',
                    nickname: ''
                },
                phone: ''
            }
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.object().shape({
            first: Yup.string().required('First name is required'),
            middle: Yup.string(),
            last: Yup.string().required('Last name is required'),
            nickname: Yup.string()
        }),
        contact: Yup.object().shape({
            email: Yup.string().email('Not a valid email').required('Email is required'),
            phones: Yup.object().shape({
                cell: Yup.object().shape({
                    isPrimary: Yup.bool(),
                    number: Yup.string()
                }),
                home: Yup.object().shape({
                    isPrimary: Yup.bool(),
                    number: Yup.string()
                }),
                work: Yup.object().shape({
                    isPrimary: Yup.bool(),
                    number: Yup.string(),
                    ext: Yup.string()
                })
            })
        }),
        address: Yup.object().shape({
            street: Yup.string().required('Street is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            zipCode: Yup.string().required('Zip Code is required')
        }),
        personal: Yup.object().shape({
            birthdate: Yup.string('Birthdate is required').nullable().required('Birthdate is required'),
            gender: Yup.string(),
            legalStatus: Yup.string(),
            employment: Yup.object().shape({
                place: Yup.string(),
                occupation: Yup.string()
            })
        }),
        previousPlay: Yup.object().shape({
            havePlayedBefore: Yup.bool(),
            location: Yup.string(),
            lastYearOfPlay: Yup.string(),
            lastSkillLevel: Yup.string()
        }),
        friendInterested: Yup.object().shape({
            name: Yup.object().shape({
                first: Yup.string(),
                last: Yup.string(),
                nickname: Yup.string()
            }),
            phone: Yup.string(),
        })
    }),
    handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
        const response = await props.onSubmit(values);

        if (!response) {
            setSubmitting(false);
            setErrors({ request: 'There was a problem submitting player' });
        }
    }
})(PlayerForm);

export { PlayerForm, FormikPlayerForm as default };