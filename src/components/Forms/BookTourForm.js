import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
// import { Debug } from './Debug';
import { options } from '../../components/BookNow/BookFormSelect/BookFormSelect';
import './BookFormStyle.css';
import BookButton from '../Common/BookButton/BookButton';

export const Fieldset = ({ name, label, style, ...rest }) => (
    <div className={'Fieldset'} style={style}>
        <label htmlFor={name} className={'new-label'}>
            {label}
        </label>
        <Field id={name} name={name} {...rest} className={'my-input'}/>
        <ErrorMessage name={name} component={'span'} />
    </div>
);

const BookTourForm = ({ style, selectedTour, submitForm, notRobot }) => (
    <Formik
        initialValues={{
            email: '',
            tourName: selectedTour || '',
            firstName: '',
            lastName: '',
            phone: '',
            numberOfPeople: '',
            date: '',
            whereAreYouFrom: '',
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            tourName: Yup.string().required('Required'),
            phone: Yup.string().required('Required'),
            date: Yup.string().required('Required'),
            firstName: Yup.string().required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
            notRobot && submitForm(values);
            resetForm();
        }}
        render={({ isSubmitting, handleReset, isValid }) => (
            <Form className={'BookTourForm-new'} style={style}>
                <Fieldset style={{ flexBasis: '100%' }} name="tourName" label="TOUR NAME" component="select">
                    {options.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </Fieldset>

                <Fieldset name="firstName" type="text" label="First Name" placeholder="First Name" />

                <Fieldset name="lastName" type="text" label="Last Name" placeholder="Last Name" />
                <Fieldset name="phone" type="tel" label="Phone Number" placeholder="Phone Number" />
                <Fieldset name="email" type="email" label="Email" placeholder="Email" />
                <Fieldset
                    name="numberOfPeople"
                    type="number"
                    label="Number Of People"
                    placeholder="Number Of People"
                />
                <Fieldset name="date" type="date" label="Date" placeholder="Date" />
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

BookTourForm.propTypes = {};
BookTourForm.defaultProps = {};

export default BookTourForm;
