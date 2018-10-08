import React, {Component} from 'react';
import BookFormInput from "../../BookNow/BookFormInput/BookFormInput";
import ContactFormTextbox from "../ContactFormTextbox/ContactFormTextbox";

import './ContactForm.css'
import BookButton from "../../Common/BookButton/BookButton";

class ContactForm extends Component {

    state = {
        name: '',
        email:'',
        message: ''
    }

    render() {
        const {email, name, message} = this.state
        return (
            <form className={'contact-form'}>
                <div>gobook@gobook.ba  / Alaudin 10, Visoko   / +387 61 025 015</div>
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

                <BookButton />

                </form>
        );
    }
}

export default ContactForm;