import React from 'react'
import './FeaturedPicture.css'

const FeaturedPicture = ({picture, title, subTitle, about}) => {
    // const backround = {
    //     //     background: `lightblue url(${picture}) no-repeat fixed center`,
    //     //     backgroundSize: 'cover'
    //     //
    //     // }

    let backGround = {
        backgroundImage: `url(${picture})`,
        backgroundPosition:'center center',
        backgroundSize: 'cover',
    }

    return (
        <div className={'featured-picture-container'} >
            <div className={'featured-picture'} style={backGround}>
                {title && <div className={'featured-title'}>{title}</div>}
                {subTitle && <div className={'featured-subtitle'}>{subTitle}</div>}

            </div>
            {about && <div className={'featured-about'}>{about}</div>}
        </div>

    )
}

export default FeaturedPicture