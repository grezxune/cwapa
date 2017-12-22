import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import { toast } from 'react-toastify';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import customAxios from '../../network/axios';
import ErrorToast from '../error-toast';
import ImageSlider from '../image-slider';

class AddNewsItemPage extends React.Component {
    constructor(props) {
        super(props);
    }

    changedFiles = (e) => {
        let countToWaitFor = e.target.files.length;
        const fileCount = e.target.files.length;
        let fileArray = [];

        for(let i = 0; i < fileCount; i++) {
            fileArray = fileArray.concat(e.target.files[i]);

            const reader = new FileReader();

            reader.onload = (e) => {
                fileArray[i].imageBase64 = e.target.result;
                countToWaitFor--;

                if (countToWaitFor === 0) {
                    this.props.setFieldValue('newsItem.images', fileArray);
                }
            };

            reader.readAsDataURL(e.target.files[i]);
        }
    }

    onDateChange = (date) => {
        if (date) {
            this.props.setFieldValue('newsItem.date', date.valueOf());
        }
    }

    onDateClick = () => {
        this.props.setTouched({
            ...this.props.touched,
            newsItem: {
                ...this.props.touched.newsItem,
                date: true
            }
        });
    }

    render() {
        return (
            <div className="box-layout">
                <Form className="box-layout__box selection-box">
                    <span className="subtitle">Add News Item</span>

                    <label className="horizontal-container horizontal-container--centered">
                        <span>Date</span>
                        <DatePicker 
                            onBlur={this.onDateClick}
                            selected={moment(this.props.values.newsItem.date)}
                            onChange={this.onDateChange}
                            className="text-input"
                            placeholderText="Date (Required)"
                        />
                    </label>
                    <Field className="text-input" type="text" name="newsItem.title" placeholder="Title (Required)" />
                    <Field className="textarea" component="textarea" name="newsItem.excerpt" placeholder="Excerpt (Required)" />
                    <Field className="textarea" component="textarea" name="newsItem.content" placeholder="Content (Required)" />

                    <label className="button" htmlFor="imagesUpload">Choose Images</label>
                    <input className="hidden" id="imagesUpload" type="file" onChange={this.changedFiles} multiple/>

                    {this.props.values.newsItem.images.length > 0 && (
                        <ImageSlider images={this.props.values.newsItem.images} />
                    )}

                    <input className="button" type="submit" value="Submit" />
                </Form>
            </div>
        );
    }
}

Yup.addMethod(Yup.mixed, 'sameAs', function (ref, message) {
    return this.test('sameAs', message, function (value) {
        return value === this.resolve(ref);
    });
});

const FormikAddNewsItemPage = withFormik({
    mapPropsToValues({ newsItem }) {
        return {
            newsItem: newsItem ? newsItem : {
                date: moment().valueOf(),
                title: '',
                excerpt: '',
                content: '',
                images: []
            }
        }
    },
    validationSchema: Yup.object().shape({
        newsItem: Yup.object().shape({
            date: Yup.number().required('Date is required'),
            title: Yup.string().required('Title is required'),
            excerpt: Yup.string().required('Excerpt is required'),
            content: Yup.string().required('Content is required'),
            images: Yup.array().of(Yup.mixed())
        })
    }),
    handleSubmit: async (values, { props, resetForm, setErrors, setSubmitting }) => {
        values.newsItem.images = values.newsItem.images.map((image) => {
            return {
                imageBase64: image.imageBase64,
                lastModified: image.lastModified,
                name: image.name,
                size: image.size,
                type: image.type
            };
        });

        try {
            const response = await customAxios.post('/news-item', { newsItem: values.newsItem });

            if (response && response.errors) {
                setSubmitting(false);
                toast.error(<ErrorToast errors={response.errors} />);
            } else {
                toast.success(`Successfully added news item ${values.newsItem.title}!`);
            }
        } catch (err) {
            setSubmitting(false);
            if (err.response.data && err.response.data.errors) {
                toast.error(<ErrorToast errors={err.response.data.errors} />);
            }
        }
    }
})(AddNewsItemPage);

export {
    AddNewsItemPage,
    FormikAddNewsItemPage as default
};