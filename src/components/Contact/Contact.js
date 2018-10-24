import React from 'react';
import './Contact.css';
import BookButton from "../Common/BookButton/BookButton";
import Heading from "../Heading/Heading";
import ContactForm from "../../components/Forms/ContactForm";
import GoBookPicture from "../Common/GoBookPicture/GoBookPicture";
import { ReCaptcha } from 'react-recaptcha-google';
import axios from "axios";
import ConfirmationDialog from "../Forms/ConfirmationDialog/ConfirmationDialog";


class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    state = {
        custom: false,
        notRobot: false,
    };

    static defaultProps = {};

    static propTypes = {};

    componentDidMount() {
        if (this.captchaDemo) {
            console.log('started, just a second...');
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }

    onLoadRecaptcha = () => {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    };

    verifyCallback = recaptchaToken => {
        // Here you will get the final recaptchaToken!!!
        console.log(recaptchaToken, '<= your recaptcha token');
        this.setState({ notRobot: true });
    };

    submitForm = data => {
        axios({
            url: `https://iau89pgyxf.execute-api.eu-west-1.amazonaws.com/dev/email/contact`,
            method: 'POST',
            data: data,
            dataType: 'json',
        })
            .then(response => {
                console.log(response);
                this.setState(({ open }) => ({
                    open: !open,
                }));
            })
            .catch(error => {
                console.log(error);
            });
    };
    handleClose = () => {
        this.setState(({ open }) => ({ open: !open }));
    };
    render() {
        return (
            <div className={'contact-container'}>
                <ReCaptcha
                    ref={el => {
                        this.captchaDemo = el;
                    }}
                    size="invisible"
                    render="explicit"
                    sitekey="6LdBB3YUAAAAALCGIKE_QOlBRfPl082-xvEyh5ui"
                    onloadCallback={this.onLoadRecaptcha}
                    verifyCallback={this.verifyCallback}
                />
                <Heading mainTitle={'contact us'} hasLine/>
                <div className={'contact-details'}>
                    <ContactForm notRobot={this.state.notRobot} submitForm={this.submitForm}/>
                    <GoBookPicture/>
                </div>
                <ConfirmationDialog open={this.state.open} handleClose={this.handleClose} />
            </div>
        );
    }
}
export default Contact;
