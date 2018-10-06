import React from 'react';
import PropTypes from 'prop-types';
import './BookTourForm.css'
import BookFormInput from "../BookFormInput/BookFormInput";

const BookTourForm = (props) => {
    const { classes } = props;

    return (
        <div className={'BookTourForm'}>
            <BookFormInput name={'ToUR NAME'} placeholder={'Bosnia and Herzegovina Intro Tour'}/>
        </div>
    );
};

BookTourForm.propTypes = {};
BookTourForm.defaultProps = {};

export default BookTourForm;

