import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
// import { Debug } from './Debug';
import BookButton from '../Common/BookButton/BookButton';
import { Fieldset } from './BookTourForm';
import '../../components/Contact/ContactForm/ContactForm.css';
import './BookFormStyle.css';

const ContactForm = ({ submitForm, notRobot }) => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object().shape({
      email: Yup.string().email('Invalid email address').required('Required'),
      name: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    })}
    onSubmit={(values, { resetForm }) => {
      notRobot && submitForm(values);
      resetForm();
    }}
    render={({ isSubmitting, handleReset, isValid }) => (
      <Form className={'contact-form'}>
        <Fieldset name="name" type="text" label="Your Name" placeholder="Your Name" />
        <Fieldset name="email" type="email" label="Your Email" placeholder="Your Email" />

        <Fieldset
          name="message"
          type="text"
          label="Your Message"
          placeholder="Your Message"
          component="textarea"
        />

        <BookButton
          type="submit"
          buttonText={'Send'}
          style={{ flexBasis: '100%' }}
          // disabled={!isValid}
        />
        {/*<Debug />*/}
      </Form>
    )}
  />
);

ContactForm.propTypes = {};
ContactForm.defaultProps = {};

export default ContactForm;
