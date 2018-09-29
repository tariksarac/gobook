import React from 'react';
// import Social from '../Header/Social';
import './Footer.css';
import { Link, withRouter } from 'react-router-dom';
import Line from '../Common/Line/Line';
import { Instagram, Facebook, Twitter } from 'react-feather';

const logo = require('../../images/logo.jpeg');

const Footer = props => {
    return (
        <div className={'Footer'}>
            <div className={'footer-contact'}>
                <div className={'main-footer'}>Contact</div>
                <Line color={'#ffffff'} />
                <div className={'contact-detail'}>
                    <div>
                        <div>
                            <span role="img">📞 </span>Viber, WhatsApp
                        </div>
                        <div>
                            <span role="img">👉</span>+387 61025015
                        </div>
                    </div>
                    <div>
                        <div>
                            <span role="img">📬</span> gobook@gobook.ba
                        </div>
                    </div>
                    <div>GoBook Ⓡ2018. All rights reserved.</div>
                </div>
            </div>
            <div className={'footer-social'}>
                <div className={'main-footer'}>Social media</div>
                <Line color={'#ffffff'} />
                <div className={'contact-detail'}>
                    <div className={'social'}>
                        <Instagram marginRight={'50px'} className={'social-icon'}/>
                        <Facebook className={'social-icon'}/>
                        <Twitter className={'social-icon'}/>
                    </div>

                </div>
            </div>
            <div className={'footer-site-map'}>
                <div className={'main-footer'}>SITEMAP</div>
                <Line color={'#ffffff'} />
                <div className={'contact-detail'}>
                    <div className={'site-map'}>
                        <div className={'site-link'}>Home</div>
                        <div className={'site-link'}>Why Bosnia</div>
                        <div className={'site-link'}>About</div>
                        <div className={'site-link'}>Contact</div>
                    </div>
                    <div className={'site-link'}>Terms of Use</div>
                </div>
            </div>
            {/*<div className={'footer-logo'}>*/}
            {/*<img src={logo} alt={'Go Book'} onClick={() => props.history.push('/')}/>*/}
            {/*</div>*/}
            {/*<div className={'footer-text'}>Go Book</div>*/}

            {/*<div className={'footer-social'}>*/}
            {/*<Social />*/}
            {/*</div>*/}
            {/*<div className={'footer-site-map'}>*/}
            {/*<Link to={'/terms-of-use'} style={{ color: '#f2f2f2', height: '50px' }}>*/}
            {/*Terms of use*/}
            {/*</Link>*/}
            {/*</div>*/}
        </div>
    );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default withRouter(Footer);
