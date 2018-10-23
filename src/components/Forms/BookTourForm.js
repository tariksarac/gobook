import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field, Form, Formik, withFormik } from 'formik';
import * as Yup from 'yup';
import BookFormSelect from '../BookNow/BookFormSelect/BookFormSelect';
import BookFormInput from '../BookNow/BookFormInput/BookFormInput';
import { Debug } from './Debug';
import { options } from '../../components/BookNow/BookFormSelect/BookFormSelect';
import './BookFormStyle.css';
import BookButton from '../Common/BookButton/BookButton';

export const Fieldset = ({ name, label, style, ...rest }) => (
    <div className={'Fieldset'} style={style}>
        <label htmlFor={name} className={'new-label'}>
            {label}
        </label>
        <Field id={name} name={name} {...rest} />
        <ErrorMessage name={name} component={'span'} />
    </div>
);

const BookTourForm = ({style}) => (
    <Formik
        initialValues={{
            email: '',
            tourName: '',
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
            firstName: Yup.string().required('Required'),
        })}
        onSubmit={values => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
            }, 500);
        }}
        render={({ isSubmitting, handleReset }) => (
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

                <BookButton type="submit" buttonText={'BOOK THIS TOUR'} style={{ flexBasis: '100%' }}/>
                {/*<Debug />*/}
            </Form>
        )}
    />
);

// const BookTourForm = props => {
//     const { values, touched, errors, handleChange, handleBlur, handleSubmit, handleReset, style } = props;
//     return (
//         <form style={style}>
//             <BookFormSelect
//                 id={'tourName'}
//                 name={'TOUR NAME'}
//                 placeholder={'Select Tour'}
//                 customStyle={{ width: '100%', marginBottom: '25px' }}
//                 fullWidth
//                 tourItem={values.tourName}
//                 onChange={event => handleChange(event)}
//                 // onSelectOption={option => this.setState({ tourName: option })}
//                 // selectedTour={this.state.tourName}
//             />
//             <BookFormInput
//                 id={'firstName'}
//                 name={'First name'}
//                 placeholder={'First name'}
//                 // customStyle={{ width: '50%' }}
//                 value={values.first_name}
//                 type={'text'}
//                 onChange={event => handleChange(event)}
//                 // onChange={event => this.setState({ firstName: event.target.value })}
//             />
//             <BookFormInput
//                 id={'lastName'}
//                 name={'Last name'}
//                 placeholder={'Last name'}
//                 // customStyle={{ width: '50%' }}
//                 type={'text'}
//                 value={values.last_name}
//                 onChange={event => handleChange(event)}
//             />
//             <BookFormInput
//                 id={'phoneNumber'}
//                 name={'Phone number'}
//                 placeholder={'Phone number'}
//                 // customStyle={{ width: '50%' }}
//                 type={'tel'}
//                 value={values.phone}
//                 onChange={event => handleChange(event)}
//             />
//             <BookFormInput
//                 id={'email'}
//                 name={'Email'}
//                 placeholder={'Email'}
//                 // customStyle={{ width: '50%' }}
//                 type={'email'}
//                 value={values.email}
//                 onChange={event => handleChange(event)}
//             />
//             <BookFormInput
//                 id={'numberOfPeople'}
//                 name={'Number of people'}
//                 placeholder={'Number of people'}
//                 // customStyle={{ width: '50%' }}
//                 type={'number'}
//                 value={values.numberOfPeople}
//                 onChange={event => handleChange(event)}
//             />
//             <BookFormInput
//                 id={'date'}
//                 name={'Date'}
//                 placeholder={'Date'}
//                 // customStyle={{ width: '50%' }}
//                 type={'date'}
//                 value={values.date}
//                 onChange={event => handleChange(event)}
//             />
//             <BookFormInput
//                 id={'whereAreYouFrom'}
//                 name={'Where are you from'}
//                 placeholder={'Where are you from'}
//                 fullWidth
//                 customStyle={{ width: '100%' }}
//                 type={'text'}
//                 value={values.whereAreYouFrom}
//                 onChange={event => handleChange(event)}
//             />
//         </form>
//     );
// };

BookTourForm.propTypes = {};
BookTourForm.defaultProps = {};

// const EnhancedForm = withFormik({
//     mapPropsToValues: ({formFields}) => ({ ...formFields }),
//
//     // Custom sync validation
//     validate: values => {
//         const errors = {};
//
//         if (!values.name) {
//             errors.name = 'Required';
//         }
//
//         return errors;
//     },
//
//     handleSubmit: (values, { setSubmitting }) => {
//         setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//         }, 1000);
//     },
//
//     displayName: 'BasicForm',
// });
//
// export default EnhancedForm(BookTourForm);
export default BookTourForm;
