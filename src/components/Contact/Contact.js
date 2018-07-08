import React from 'react'
import './Contact.css'

const Contact = () => {
    return(
        <div className={'contact-container'}>
            <div className={'Contact'}>
                <div className={'contact-heading'}>CONTACT US</div>
                <div className={'contact-detail'}>info@gobook.ba &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp; &nbsp; &nbsp;poznatog junaka 23, Sarajevo&nbsp;&nbsp;&nbsp;&nbsp; /&nbsp; &nbsp;&nbsp;&nbsp; +3876111111</div>
                {/*<form name="contact" method="POST" data-netlify="true">*/}
                    {/*<input id={'name'} placeholder={'Name'} type={'text'} name={'Name'}/>*/}
                    {/*<input id={'name'} placeholder={'Email'} type={'email'} name={'_replyto'}/>*/}
                    {/*<input placeholder={'Subject'} type={'text'} name={'Subject'}/>*/}
                    {/*<textarea placeholder={'Message'} name={'Message'}/>*/}
                    {/*<input type="submit" value="Send"/>*/}
                {/*</form>*/}
                <form name="contact" method="POST" netlify>
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Your Role: <select name="role[]" multiple>
                            <option value="leader">Leader</option>
                            <option value="follower">Follower</option>
                        </select></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Contact