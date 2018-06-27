import React from 'react'
import './FeaturedPicture.css'
import Heading from "../Heading/Heading";

const FeaturedPicture = ({picture, title, subTitle, about, left}) => {

    let backGround = {
        backgroundImage: `url(${picture})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed'
        paddingTop: left && '200px',
        boxSizing: left && 'border-box'
    }

    let titleStyle = {
        textAlign: left && 'left',
        fontSize: left && '50px',
        paddingLeft: left && '50px',
        maxWidth: left && '300px'
    }

    let subTitleStyle = {
        textAlign: left && 'left',
        fontSize: left && '24px',
        paddingLeft: left && '50px',
        maxWidth: left && '450px'
    }

    let aboutStyle = {
        textAlign: left && 'left',
        fontSize: left && '16px',
        paddingLeft: left && '50px',
        margin: left && '0',
        paddingTop: left && '50px',
        maxWidth: left && '450px'
    }

    const whyBosniaTitle = 'Bosnia and Herzegovina'
    const whyBosniaSubTitle = 'Experience the incredible Bosnia and Herzegovina'
    const whyBosniaAbout = 'Visit the heart-shaped country, the place where the East meets the West, the country\n' +
        'with exceptionally rich gastronomy, magical natural beauty and warm-hearted people.\n' +
        '\n' +
        'Enjoy the Bosnian coffee drinking ritual.'

    const withImageStyle = {
        color: '#ffffff',
        alignItems: 'center'
    }

    const leftStyle = {
        alignItems: 'flex-start'
    }

    return (
        <div className={'featured-picture-container'} >
            <div className={'featured-picture'} style={backGround}>
                <Heading heading={title} subTitle={subTitle} about={about} style={{...withImageStyle}}/>
                {/*{title && <div className={'featured-title'} style={titleStyle}>{whyBosniaTitle}</div>}*/}
                {/*{subTitle && <div className={'featured-subtitle'} style={subTitleStyle}>{whyBosniaSubTitle}</div>}*/}
                {/*{about && <div className={'featured-about'} style={aboutStyle}>{whyBosniaAbout}</div>}*/}
            </div>

        </div>

    )
}

export default FeaturedPicture