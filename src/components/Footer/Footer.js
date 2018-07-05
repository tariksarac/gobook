import React from 'react';
import Social from "../Header/Social";
import './Footer.css'

const logo = require('../../images/logo.jpeg')


const Footer = () => {
    return (
        <div className={'Footer'}>
            <div className={'footer-contact'}>
                <span>TANZANIA PO Box 14345 Arusha Tanzania</span>
                <span> +255 688 285 354</span> <span>+255 684 864 483</span>{' '}
                <span>info@safari-infinity.com</span>{' '}
            </div>
            <div className={'footer-logo'} ><img src={logo} alt={''}/></div>
            <div className={'footer-text'} >Go Book</div>
            <div className={'footer-social'} ><Social /></div>
            <div />
        </div>
    );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
