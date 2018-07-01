import React from 'react'
import './Contact.css'

const Contact = () => {
    return(
        <div className={'contact-container'}>
            <div className={'Contact'}>
                <div className={'contact-heading'}>CONTACT US</div>
                <div className={'contact-detail'}>info@gobook.ba &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp;poznatog junaka 23, Sarajevo&nbsp;&nbsp;&nbsp;&nbsp; /&nbsp; &nbsp;&nbsp;&nbsp; +3876111111</div>
                {/*<form action="https://formspree.io/tarik.sarac@gmail.com"*/}
                      {/*method="POST">*/}
                    {/*<input id={'name'} placeholder={'Name'} type={'text'} name={'Name'}/>*/}
                    {/*<input id={'name'} placeholder={'Email'} type={'email'} name={'_replyto'}/>*/}
                    {/*<input placeholder={'Subject'} type={'text'} name={'Subject'}/>*/}
                    {/*<textarea placeholder={'Message'} name={'Message'}/>*/}
                    {/*<input type="submit" value="Send"/>*/}
                {/*</form> */}
                <form name="contact" method="POST" netlify>
                    <input id={'name'} placeholder={'Name'} type={'text'} name={'name'}/>
                    <input id={'name'} placeholder={'Email'} type={'email'} name={'_replyto'}/>
                    <input placeholder={'Subject'} type={'text'} name={'subject'}/>
                    <textarea placeholder={'Message'} name={'message'}/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    )
}
export default Contact