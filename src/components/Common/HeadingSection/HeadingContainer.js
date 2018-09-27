import React from 'react';
import PropTypes from 'prop-types';
import '../../Heading/Heading.css';

const HeadingContainer = ({children}) => {
    return (
        <div className={'HeadingContainer'} >{children}</div>
    );
};

HeadingContainer.propTypes = {};
HeadingContainer.defaultProps = {};

export default HeadingContainer;
