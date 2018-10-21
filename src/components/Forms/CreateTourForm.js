import React from 'react';
import PropTypes from 'prop-types';
import BookFormSelect from "../BookNow/BookFormSelect/BookFormSelect";
import BookFormInput from "../BookNow/BookFormInput/BookFormInput";
import {withFormik} from "formik";


const CreateTourForm = props => {
    const { values, touched, errors, handleChange, handleBlur, handleSubmit, handleReset, style } = props;
    return (
        <form style={style}>

            <BookFormInput
                id={'firstName'}
                name={'First name'}
                placeholder={'First name'}
                // customStyle={{ width: '50%' }}
                value={values.first_name}
                type={'text'}
                onChange={event => handleChange(event)}
                // onChange={event => this.setState({ firstName: event.target.value })}
            />
            <BookFormInput
                id={'lastName'}
                name={'Last name'}
                placeholder={'Last name'}
                // customStyle={{ width: '50%' }}
                type={'text'}
                value={values.last_name}
                onChange={event => handleChange(event)}
            />
            <BookFormInput
                id={'phoneNumber'}
                name={'Phone number'}
                placeholder={'Phone number'}
                // customStyle={{ width: '50%' }}
                type={'tel'}
                value={values.phone}
                onChange={event => handleChange(event)}
            />
            <BookFormInput
                id={'email'}
                name={'Email'}
                placeholder={'Email'}
                // customStyle={{ width: '50%' }}
                type={'email'}
                value={values.email}
                onChange={event => handleChange(event)}
            />
            <BookFormInput
                id={'numberOfPeople'}
                name={'Number of people'}
                placeholder={'Number of people'}
                // customStyle={{ width: '50%' }}
                type={'number'}
                value={values.numberOfPeople}
                onChange={event => handleChange(event)}
            />
            <BookFormInput
                id={'date'}
                name={'Date'}
                placeholder={'Date'}
                // customStyle={{ width: '50%' }}
                type={'date'}
                value={values.date}
                onChange={event => handleChange(event)}
            />
            <BookFormInput
                id={'whereAreYouFrom'}
                name={'Where are you from'}
                placeholder={'Where are you from'}
                fullWidth
                customStyle={{ width: '100%' }}
                type={'text'}
                value={values.whereAreYouFrom}
                onChange={event => handleChange(event)}
            />
        </form>
    );
};

CreateTourForm.propTypes = {};
CreateTourForm.defaultProps = {};

const EnhancedForm = withFormik({
    mapPropsToValues: ({formFields}) => ({ ...formFields }),

    // Custom sync validation
    validate: values => {
        const errors = {};

        if (!values.name) {
            errors.name = 'Required';
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'BasicForm',
});

export default EnhancedForm(CreateTourForm);

// const CreateTourForm = (props) => {
//     return (
//         <div></div>
//     );
// };
//
// CreateTourForm.propTypes = {};
// CreateTourForm.defaultProps = {};
//
// export default CreateTourForm;
