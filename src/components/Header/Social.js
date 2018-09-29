import React from 'react'
import './Social.css';

import { SocialIcon } from 'react-social-icons'

const Social = () => {
    return (
       <div className={'social'}>
           <SocialIcon network="facebook" className={'facebbok'} style={{ height: 35, width: 35 }} color={'#606060'} url={'https://www.facebook.com/GoBook-288397341949085/'}/>
           <SocialIcon network="twitter"  style={{ height: 35, width: 35 }} color={'#606060'}/>
           <SocialIcon network="instagram" style={{ height: 35, width: 35 }} color={'#606060'} url={'https://www.instagram.com/gobook.ba/'}/>
       </div>
    )
}

export default Social