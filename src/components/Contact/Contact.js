import React from 'react';
import './Contact.css';
import BookButton from "../Common/BookButton/BookButton";
import Heading from "../Heading/Heading";
import ContactForm from "./ContactForm/ContactForm";
import GoBookPicture from "../Common/GoBookPicture/GoBookPicture";

class Contact extends React.Component {
    render() {
        return (
            <div className={'contact-container'}>
                <Heading mainTitle={'contact us'} hasLine/>
                <div className={'contact-details'}>
                    <ContactForm/>
                    <GoBookPicture/>
                </div>


                {/*<div className={'Contact'}>*/}
                    {/*<div className={'contact-heading'}>CONTACT US</div>*/}
                    {/*<div className={'contact-detail'}>*/}
                        {/*gobook@gobook.ba &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp;Alaudin 10, Visoko&nbsp;&nbsp;&nbsp;&nbsp; /&nbsp; &nbsp;&nbsp;&nbsp; +387 61 025 015*/}
                    {/*</div>*/}
                    {/*<form action="https://formspree.io/info@gobook.ba" method="POST">*/}
                        {/*<input type="hidden" name="_subject" value="Someone contact you!" />*/}
                        {/*<input type="hidden" name="_cc" value="tarik.sarac@gmail.com" />*/}
                        {/*<input id={'name'} placeholder={'Name'} type={'text'} name={'Name'} />*/}
                        {/*<input id={'name'} placeholder={'Email'} type={'email'} name={'_replyto'} />*/}
                        {/*<input placeholder={'Subject'} type={'text'} name={'Subject'} />*/}
                        {/*<textarea placeholder={'Message'} name={'Message'} />*/}
                        {/*<BookButton type={"submit"} value="Book" buttonText={"Send"} style={{ width: '100%', height:'35px' }} />*/}
                    {/*</form>*/}
                {/*</div>*/}
                {/*<div style={{gridArea:'ft'}}/>*/}
            </div>
        );
    }
}
export default Contact;
