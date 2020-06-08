import React from 'react';
import '../../Heading/Heading.css';

const HeadingContainer = ({ children, style, id }) => {
  return (
    <div className={'HeadingContainer'} style={style} id={id}>
      {children}
    </div>
  );
};

HeadingContainer.propTypes = {};
HeadingContainer.defaultProps = {};

export default HeadingContainer;
