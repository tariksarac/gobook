import React from 'react';
import Heading from "../Heading/Heading";
import './About.css'
import {customStyle} from "../LandingPage/LandingPage";
import HeadingContainer from "../Common/HeadingSection/HeadingContainer";

const subTitle = 'In a very short period Bosnia and Herzegovina has become a tourist fairy-tale. Thanks to the beauty of our country the tourist season every year becomes richer in different trips on offer to our guests. We are ready to provide all the necessary information about trips and transfers as well as to recommend the best service based on demands of our guests. \n'
const aboutUs = 'GoBook d.o.o Visoko is a young tourist agency oriented towards\n' +
    'promotion of natural beauty and resources of Bosnia and Herzegovina,\n' +
    'which offers the most attractive excursions and accommodation\n' +
    'arrangements.\n' +
    'With educated employees, material and technical equipment, GoBook\n' +
    'can provide excellent services and offer a completely new business\n' +
    'model which is entirely customer-oriented.\n' +
    'Thanks to the beauty of our country, we are ready to provide all the\n' +
    'necessary information regarding excursions, hotel reservations,\n' +
    'transfers, as well as recommend a service based on customer wishes.\n' +
    'We are committed to find the best value for money without losing quality of\n' +
    'service and products. We provide unforgettable experience to our clients\n' +
    'and quality time spent in Bosnia and Herzegovina.\n' +
    'In our offer, we highlight the excursions that represent unavoidable and\n' +
    'the best destinations in Bosnia and Herzegovina. We are also ready to\n' +
    'work with you - to create a vision of the future destination together.'
const About = () => {
    return (
        <div className={'About'}>
            <HeadingContainer>
                <Heading mainTitle={'About Go Book'} about={aboutUs} hasLine />
                <div className={'about-image'}><img src={require('../../images/GoBook.png')}/></div>
            </HeadingContainer>

        </div>
    );
};

About.propTypes = {};
About.defaultProps = {};

export default About;
