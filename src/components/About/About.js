import React from 'react';
import Heading from "../Heading/Heading";
import './About.css'
import {customStyle} from "../LandingPage/LandingPage";

const subTitle = 'In a very short period Bosnia and Herzegovina has become a tourist fairy-tale. Thanks to the beauty of our country the tourist season every year becomes richer in different trips on offer to our guests. We are ready to provide all the necessary information about trips and transfers as well as to recommend the best service based on demands of our guests. \n'

const About = () => {
    return (
        <div className={'About'}>
            <Heading heading={'About us'} subTitle={subTitle} style={customStyle}/>
        </div>
    );
};

About.propTypes = {};
About.defaultProps = {};

export default About;
