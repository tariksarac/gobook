import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import BookButton from '../Common/BookButton/BookButton';
import { Debug } from './Debug';
import { Fieldset } from './BookTourForm';

const CreateTourForm = ({ style, submitForm, notRobot }) => {
    return (
        <Formik
            initialValues={{
                fullName: '',
                email: '',
                phone: '',
                numberOfPeople: '',
                placeToVisit: '',
                startDate: '',
                endDate: '',
                whereAreYouFrom: '',
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                phone: Yup.string().required('Required'),
                placeToVisit: Yup.string().required('Required'),
                startDate: Yup.string().required('Required'),
                endDate: Yup.string().required('Required'),
                fullName: Yup.string().required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
                notRobot && submitForm(values);
                resetForm();
            }}
            render={({ isSubmitting, handleReset, isValid }) => (
                <Form className={'BookTourForm-new'} style={style}>
                    <Fieldset
                        name="fullName"
                        type="text"
                        label="Full Name"
                        placeholder="Full Name"
                        style={{ flexBasis: '100%' }}
                    />
                    <Fieldset name="phone" type="tel" label="Phone Number" placeholder="Phone Number" />
                    <Fieldset name="email" type="email" label="Email" placeholder="Email" />
                    <Fieldset
                        name="numberOfPeople"
                        type="number"
                        label="Number Of People"
                        placeholder="Number Of People"
                    />
                    <Fieldset
                        name="placeToVisit"
                        type="text"
                        label="Place to visit"
                        placeholder="Place to visit"
                    />
                    <Fieldset name="startDate" type="date" label="Start date" placeholder="Start date" />
                    <Fieldset name="endDate" type="date" label="End date" placeholder="End date" />
                    <Fieldset
                        name="whereAreYouFrom"
                        type="text"
                        label="Where Are You From"
                        placeholder="Where Are You From"
                    />

                    <BookButton
                        type="submit"
                        buttonText={'BOOK THIS TOUR'}
                        style={{ flexBasis: '100%', margin: '20px 8px 0 8px' }}
                        // disabled={!isValid}
                    />
                    {/*<Debug />*/}
                </Form>
            )}
        />
    );
};

CreateTourForm.propTypes = {};
CreateTourForm.defaultProps = {};

export default CreateTourForm;
