import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { toast } from 'react-toastify';

import customAxios from '../../network/axios';
import NameInputs from './name-inputs';
import ContactInputs from './contact-inputs';
import AddressInputs from './address-inputs';
import PersonalInputs from './personal-inputs';
import PreviousPlayInputs from './previous-play-inputs';
import FriendInterestedInputs from './friend-interested-inputs';
import ErrorToast from '../error-toast';

import 'formik/dist/formik';

const PlayerForm = ({
    player,
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    setFieldValue,
    onRemove,
    setTouched
}) => {
    return (
        <div className="box-layout">
            <Form className="form">
                <div>
                    {errors &&
                        errors.request && (
                            <div className="box-layout">
                                <div className="box-layout__box">
                                    <p className="error-text">
                                        {errors.request}
                                    </p>
                                </div>
                            </div>
                        )}

                    <div className="box-layout">
                        <NameInputs
                            errors={errors}
                            touched={touched}
                            values={values}
                            onChange={handleChange}
                        />
                        <ContactInputs
                            errors={errors}
                            touched={touched}
                            values={values}
                            onChange={handleChange}
                        />
                        <AddressInputs
                            errors={errors}
                            touched={touched}
                            values={values}
                            onChange={handleChange}
                        />
                        <PersonalInputs
                            errors={errors}
                            touched={touched}
                            values={values}
                            onChange={handleChange}
                            setFieldValue={setFieldValue}
                            setTouched={setTouched}
                        />
                        <PreviousPlayInputs
                            errors={errors}
                            touched={touched}
                            values={values}
                            onChange={handleChange}
                        />
                        <FriendInterestedInputs
                            errors={errors}
                            touched={touched}
                            values={values}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="box-layout selection-box">
                        <div className="box-layout__box">
                            <button className="button" disabled={isSubmitting}>
                                Submit
                            </button>
                            {player && (
                                <input
                                    type="button"
                                    className="button button--danger"
                                    value="Remove"
                                    onClick={onRemove}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

const FormikPlayerForm = withFormik({
    mapPropsToValues({ player }) {
        return {
            name:
                player && player.name
                    ? player.name
                    : {
                          first: '',
                          middle: '',
                          last: '',
                          nickname: ''
                      },
            contact:
                player && player.contact
                    ? player.contact
                    : {
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
                          }
                      },
            address:
                player && player.address
                    ? player.address
                    : {
                          street: '',
                          city: '',
                          state: '',
                          zipCode: ''
                      },
            personal:
                player && player.personal
                    ? player.personal
                    : {
                          birthdate: undefined,
                          gender: 'Gender',
                          legalStatus: 'Legal Status',
                          employment: {
                              place: '',
                              occupation: ''
                          }
                      },
            previousPlay:
                player && player.previousPlay
                    ? player.previousPlay
                    : {
                          havePlayedBefore: false,
                          location: '',
                          lastYearOfPlay: '',
                          lastSkillLevel: 'Previous Skill Level'
                      },
            friendInterested:
                player && player.friendInterested
                    ? player.friendInterested
                    : {
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
            email: Yup.string()
                .email('Not a valid email')
                .required('Email is required'),
            phones: Yup.object()
                .shape({
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
                .test(
                    'onePrimaryRequired',
                    'One primary phone is required',
                    (phones, schema) => {
                        const hasAtLeastOnePrimaryPhone =
                            (phones.cell.number && phones.cell.isPrimary) ||
                            (phones.home.number && phones.home.isPrimary) ||
                            (phones.work.number && phones.work.isPrimary);

                        return hasAtLeastOnePrimaryPhone;
                    }
                )
        }),
        address: Yup.object().shape({
            street: Yup.string().required('Street is required'),
            city: Yup.string().required('City is required'),
            state: Yup.string().required('State is required'),
            zipCode: Yup.string().required('Zip Code is required')
        }),
        personal: Yup.object().shape({
            birthdate: Yup.mixed()
                .test(
                    'MinAge',
                    'You must be at least 12 years of age to sign up for the APA',
                    (birthdate, schema) => {
                        const today = moment();
                        const currentBirthdate = moment(birthdate);
                        const difference = today.diff(
                            currentBirthdate,
                            'years'
                        );

                        return currentBirthdate.isValid() && difference >= 12;
                    }
                )
                .required('Birthdate is required'),
            gender: Yup.string().test(
                'ValidGender',
                'You must select a valid gender option',
                (gender, schema) => {
                    return gender === 'Male' || gender === 'Female';
                }
            ),
            legalStatus: Yup.string().test(
                'ValidLegalStatus',
                'You must select a valid Legal Status option',
                (legalStatus, schema) => {
                    return (
                        legalStatus === 'Married' ||
                        legalStatus === 'Single' ||
                        legalStatus === 'Separated' ||
                        legalStatus === 'Widowed'
                    );
                }
            ),
            employment: Yup.object().shape({
                place: Yup.string(),
                occupation: Yup.string()
            })
        }),
        previousPlay: Yup.object().shape({
            havePlayedBefore: Yup.bool(),
            location: Yup.string(),
            lastYearOfPlay: Yup.string(),
            lastSkillLevel: Yup.string().test(
                'ValidSkillLevel',
                'You must select a valid Previous Skill Level',
                function(lastSkillLevel) {
                    const havePlayedBefore = this.resolve(
                        Yup.ref('havePlayedBefore')
                    );

                    if (havePlayedBefore) {
                        return (
                            lastSkillLevel === '2' ||
                            lastSkillLevel === '3' ||
                            lastSkillLevel === '4' ||
                            lastSkillLevel === '5' ||
                            lastSkillLevel === '6' ||
                            lastSkillLevel === '7' ||
                            lastSkillLevel === 'IDR'
                        );
                    } else {
                        return true;
                    }
                }
            )
        }),
        friendInterested: Yup.object().shape({
            name: Yup.object().shape({
                first: Yup.string(),
                last: Yup.string(),
                nickname: Yup.string()
            }),
            phone: Yup.string()
        })
    }),
    handleSubmit: async (
        values,
        { props, resetForm, setErrors, setSubmitting }
    ) => {
        const response = await props.onSubmit(values);

        if (response && response.errors) {
            setSubmitting(false);
            toast.error(<ErrorToast errors={response.errors} />);
        } else {
            toast.success('Successfully submitted player!');
        }
    }
})(PlayerForm);

export { PlayerForm, FormikPlayerForm as default };
