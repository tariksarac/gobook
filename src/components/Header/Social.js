import React from 'react'
import './Social.css';

import { SocialIcon } from 'react-social-icons'

const Social = () => {
    return (
       <div className={'social'}>
           <SocialIcon network="facebook" style={{ height: 35, width: 35 }} color={'#606060'}/>
           <SocialIcon network="twitter"  style={{ height: 35, width: 35 }} color={'#606060'}/>
           <SocialIcon network="instagram" style={{ height: 35, width: 35 }} color={'#606060'}/>
       </div>
    )
}

export default Social