import React from 'react'
import './FeaturedPicture.css'
import Heading from "../Heading/Heading";

const FeaturedPicture = ({picture, title, subTitle, about, left}) => {



    let featuredStyle= {
        background: `linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ), url(${picture})`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
        paddingTop: left && '200px',
        boxSizing: left && 'border-box'
    }

    const withImageStyle = {
        color: '#ffffff',
        alignItems: 'center',
        fontSize:'50px!important'
    }

    return (
        <div className={'featured-picture-container'} >
            <div className={'featured-picture'} style={featuredStyle}>
                <Heading heading={title} subTitle={subTitle} about={about} style={{...withImageStyle}} large/>
            </div>

        </div>

    )
}

export default FeaturedPicture