import React from 'react';
import Social from '../Header/Social';
import './Footer.css';
import { Link, withRouter } from 'react-router-dom';

const logo = require('../../images/logo.jpeg');

const Footer = props => {
    return (
        <div className={'Footer'}>
            <div className={'footer-contact'}>
                <span>
                    <span role="img">📞 </span>Viber, WhatsApp <span role="img">👉</span>+387 61025015
                </span>
                <span>gobook@gobook.ba</span>
            </div>
            {/*<div className={'footer-logo'}>*/}
            {/*<img src={logo} alt={'Go Book'} onClick={() => props.history.push('/')}/>*/}
            {/*</div>*/}
            {/*<div className={'footer-text'}>Go Book</div>*/}
            <div className={'footer-social'}>
                <Social />
            </div>
            <div className={'footer-site-map'}>
                <Link to={'/terms-of-use'} style={{ color: '#f2f2f2', height: '50px' }}>
                    Terms of use
                </Link>
            </div>
        </div>
    );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default withRouter(Footer);
