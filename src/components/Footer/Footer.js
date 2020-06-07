import React from 'react';
import './Footer.css';
import { withRouter } from 'react-router-dom';
import Line from '../Common/Line/Line';
import { Instagram, Facebook, Twitter } from 'react-feather';

const Footer = ({ history }) => {
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
              <span role="img">👉 </span>+387 61025015
            </div>
          </div>
          <div>
            <div>
              <span role="img">📬 </span>
              <a className={'site-link'} href="mailto:gobook@gobook.ba">
                gobook@gobook.ba
              </a>
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
            <a className={'site-link'} href={'https://www.instagram.com/gobook.ba/'}>
              <Instagram />
            </a>
            <a className={'site-link'} href={'https://www.facebook.com/GoBook-227313291292119/'}>
              <Facebook />
            </a>
            <Twitter className={'social-icon'} />
          </div>
        </div>
      </div>
      <div className={'footer-site-map'}>
        <div className={'main-footer'}>SITEMAP</div>
        <Line color={'#ffffff'} />
        <div className={'contact-detail'}>
          <div className={'site-map'}>
            <div className={'site-link'} onClick={() => history.push('/')}>
              Home
            </div>
            <div className={'site-link'} onClick={() => history.push('/why-bosnia')}>
              Why Bosnia
            </div>
            <div className={'site-link'} onClick={() => history.push('/about')}>
              About
            </div>
            <div className={'site-link'} onClick={() => history.push('/contact')}>
              Contact
            </div>
          </div>
          <div
            className={'site-link'}
            style={{ paddingBottom: '30px' }}
            onClick={() => history.push('/terms-of-use')}
          >
            Terms of Use
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};
Footer.defaultProps = {};

export default withRouter(Footer);
