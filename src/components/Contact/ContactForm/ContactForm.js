import React, {Component} from 'react';
import BookFormInput from "../../BookNow/BookFormInput/BookFormInput";
import ContactFormTextbox from "../ContactFormTextbox/ContactFormTextbox";

import './ContactForm.css'

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
                        // customStyle={{ width: '50%' }}
                        value={name}
                        type={'text'}
                        onChange={event => this.setState({ name: event.target.value })}
                        multiline={true}
                    />

                    <BookFormInput
                        name={'Your Email'}
                        placeholder={'Email'}
                        // customStyle={{ width: '50%' }}
                        type={'email'}
                        value={email}
                        onChange={event => this.setState({ email: event.target.value })}
                    />
                <ContactFormTextbox
                    name={'Message'}
                    placeholder={'Message'}
                    // customStyle={{ width: '50%' }}
                    type={'text'}
                    value={message}
                    onChange={event => this.setState({ message: event.target.value })}
                />

                </form>
        );
    }
}

export default ContactForm;