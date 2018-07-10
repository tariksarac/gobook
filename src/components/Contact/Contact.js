import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className={'contact-container'}>
                <div className={'Contact'}>
                    <div className={'contact-heading'}>CONTACT US</div>
                    <div className={'contact-detail'}>
                        gobook@gobook.ba &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp;Alaudin 10, Visoko&nbsp;&nbsp;&nbsp;&nbsp; /&nbsp; &nbsp;&nbsp;&nbsp; +3876111111
                    </div>
                    <form name="contact" method="POST" netlify="true">
                        <input id={'name'} placeholder={'Name'} type={'text'} name={'Name'} />
                        <input id={'name'} placeholder={'Email'} type={'email'} name={'_replyto'} />
                        <input placeholder={'Subject'} type={'text'} name={'Subject'} />
                        <textarea placeholder={'Message'} name={'Message'} />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        );
    }
}
export default Contact;
