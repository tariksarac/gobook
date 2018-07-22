import React from 'react';
import './Contact.css';
import BookButton from "../Common/BookButton/BookButton";

class Contact extends React.Component {
    render() {
        return (
            <div className={'contact-container'}>
                <div className={'Contact'}>
                    <div className={'contact-heading'}>CONTACT US</div>
                    <div className={'contact-detail'}>
                        gobook@gobook.ba &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp;Alaudin 10, Visoko&nbsp;&nbsp;&nbsp;&nbsp; /&nbsp; &nbsp;&nbsp;&nbsp; +3876111111
                    </div>
                    <form action="https://formspree.io/tarik.sarac@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="Someone contact you!" />
                        <input id={'name'} placeholder={'Name'} type={'text'} name={'Name'} />
                        <input id={'name'} placeholder={'Email'} type={'email'} name={'_replyto'} />
                        <input placeholder={'Subject'} type={'text'} name={'Subject'} />
                        <textarea placeholder={'Message'} name={'Message'} />
                        <BookButton type={"submit"} value="Book" buttonText={"Send"} style={{ width: '100%', height:'35px' }} />
                    </form>
                </div>
            </div>
        );
    }
}
export default Contact;
