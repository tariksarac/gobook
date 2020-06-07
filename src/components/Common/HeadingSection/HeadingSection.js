import React from 'react';
import PropTypes from 'prop-types';
import './HeadingSection.css';

const HeadingSection = ({ hasLine, title, subTitle, children, style }) => {
  return (
    <div className={'HeadingSection'} style={{ ...style }}>
      {title && <h1 className={'main-heading'}>{title}</h1>} {hasLine && <div className={'line'} />}
      {subTitle && <h2 className={'sub-heading'}>{subTitle}</h2>}
      {children}
    </div>
  );
};

HeadingSection.propTypes = {
  hasLine: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
HeadingSection.defaultProps = {
  hasLine: true,
  title: '',
  text: '',
};

export default HeadingSection;
