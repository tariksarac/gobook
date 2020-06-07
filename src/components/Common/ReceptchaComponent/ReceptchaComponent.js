import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReCaptcha } from 'react-recaptcha-google';

class ReceptchaComponent extends Component {
  static defaultProps = {
    verify: () => {},
  };

  static propTypes = {
    verify: PropTypes.func,
  };

  state = {};

  componentDidMount() {
    if (this.captchaDemo) {
      console.log('started, just a second...');
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  }

  onLoadRecaptcha = () => {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  };

  verifyCallback = (recaptchaToken) => {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, '<= your recaptcha token');
    // this.setState({ notRobot: true });
    this.props.verify();
  };

  render() {
    return (
      <ReCaptcha
        ref={(el) => {
          this.captchaDemo = el;
        }}
        size="invisible"
        // render="explicit"
        sitekey="6LdBB3YUAAAAALCGIKE_QOlBRfPl082-xvEyh5ui"
        onloadCallback={this.onLoadRecaptcha}
        verifyCallback={this.verifyCallback}
      />
    );
  }
}

export default ReceptchaComponent;
