import React, { Component } from 'react';
import BookFormInput from '../../BookNow/BookFormInput/BookFormInput';
import ContactFormTextbox from '../ContactFormTextbox/ContactFormTextbox';

import './ContactForm.css';
import BookButton from '../../Common/BookButton/BookButton';
import axios from 'axios';
import ConfirmationDialog from '../../Forms/ConfirmationDialog/ConfirmationDialog';

class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        open: false,
    };

    submitForm = (event) => {
        event.preventDefault()
        let data = { ...this.state };
        axios({
            url: 'https://iau89pgyxf.execute-api.eu-west-1.amazonaws.com/dev/email/contact',
            method: 'POST',
            data: data,
            dataType: 'json',
        })
            .then(response => {
                console.log(response);
                this.setState(({ open }) => ({
                    name: '',
                    email: '',
                    message: '',
                    open: !open,
                    confirmationTitle: 'Thank you!',
                }));
            })
            .catch(error => {
                console.log(error.data);
                this.setState(({ open }) => ({
                    name: '',
                    email: '',
                    message: '',
                    open: !open,
                    confirmationTitle: 'Oops something goes wrong!',
                    confirmationContent: '',
                }));
            });
    };

    handleClose = () => {
        this.setState(({ open }) => ({ open: !open }));
    };

    render() {
        const { email, name, message } = this.state;
        return (
            <form className={'contact-form'}>
                <div className={'contact-form-details'}>gobook@gobook.ba / Alaudin 10, Visoko / +387 61 025 015</div>
                <BookFormInput
                    name={'Your name'}
                    placeholder={'Your name'}
                    value={name}
                    type={'text'}
                    onChange={event => this.setState({ name: event.target.value })}
                    multiline={true}
                />

                <BookFormInput
                    name={'Your Email'}
                    placeholder={'Email'}
                    type={'email'}
                    value={email}
                    onChange={event => this.setState({ email: event.target.value })}
                />
                <ContactFormTextbox
                    name={'Message'}
                    placeholder={'Message'}
                    type={'text'}
                    value={message}
                    onChange={event => this.setState({ message: event.target.value })}
                />

                <BookButton onClickAction={(event) => this.submitForm(event)} />

                <ConfirmationDialog
                    open={this.state.open}
                    handleClose={this.handleClose}
                    confirmationTitle={this.state.confirmationTitle}
                    confirmationContent={this.state.confirmationContent}
                />
            </form>
        );
    }
}

export default ContactForm;
