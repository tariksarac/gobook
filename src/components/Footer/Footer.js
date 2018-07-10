import React from 'react';
import Social from '../Header/Social';
import './Footer.css';
import {Link} from "react-router-dom";

const logo = require('../../images/logo.jpeg');

const Footer = () => {
    return (
        <div className={'Footer'}>
            <div className={'footer-contact'}>
                <span> +255 688 285 354</span> <span>+255 684 864 483</span> <span>gobook@gobook.ba</span>{' '}
            </div>
            <div className={'footer-logo'}>
                <img src={logo} alt={''} />
            </div>
            <div className={'footer-text'}>Go Book</div>
            <div className={'footer-social'}>
                <Social />
            </div>
            <Link to={'/terms-of-use'} style={{color:'#f2f2f2'}}>Terms of use</Link>
            <div />
        </div>
    );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
