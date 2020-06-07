import React from 'react';
import PropTypes from 'prop-types';
import './HeroImage.css';

const HeroImage = ({ picture, style, children }) => {
  const imageStyle = {
    background: `url(${picture}) center / cover no-repeat scroll`,
  };
  return (
    <div className={'HeroImage'} style={{ ...style, ...imageStyle }}>
      <div className={'text-container'}>{children}</div>
    </div>
  );
};

HeroImage.propTypes = {
  picture: PropTypes.string,
};
HeroImage.defaultProps = {
  picture: '',
};

export default HeroImage;
