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
                    <GoBookPicture picture={'https://images.ctfassets.net/0o22ljw5du6a/3rqimAssEw6Cw8OuSUgGwg/fb51a3ef7ed1338d972fb94a8a080405/kravice.jpg'}/>
                </div>
                <ConfirmationDialog open={this.state.open} handleClose={this.handleClose} />
            </div>
        );
    }
}
export default Contact;
