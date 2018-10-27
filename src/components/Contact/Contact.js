import React from 'react';
import './Contact.css';
import BookButton from "../Common/BookButton/BookButton";
import Heading from "../Heading/Heading";
import ContactForm from "../../components/Forms/ContactForm";
import GoBookPicture from "../Common/GoBookPicture/GoBookPicture";
import { ReCaptcha } from 'react-recaptcha-google';
import axios from "axios";
import ConfirmationDialog from "../Forms/ConfirmationDialog/ConfirmationDialog";
import ReceptchaComponent from "../Common/ReceptchaComponent/ReceptchaComponent";


class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        custom: false,
        notRobot: false,
    };

    static defaultProps = {};

    static propTypes = {};

    verify = () => this.setState(({notRobot}) => ({notRobot: !notRobot}))


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
                <ReceptchaComponent verify={this.verify}/>
                <Heading mainTitle={'contact us'} hasLine/>
                <div className={'contact-details'}>
                    <ContactForm notRobot={this.state.notRobot} submitForm={this.submitForm}/>
                    <GoBookPicture picture={'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/42194651_1154056038075009_3040074213995053056_o.jpg?_nc_cat=108&_nc_ht=scontent-waw1-1.xx&oh=60feb19c7f2e0a60cdd12a7cd743a04e&oe=5C43E229'}/>
                </div>
                <ConfirmationDialog open={this.state.open} handleClose={this.handleClose} />
            </div>
        );
    }
}
export default Contact;
