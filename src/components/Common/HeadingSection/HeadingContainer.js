import React from 'react';
import PropTypes from 'prop-types';

const HeadingContainer = ({children}) => {
    return (
        <div style={{display:'flex', justifyContent:'space-between', gridArea:'content', alignItems: 'flex-start'}}>{children}</div>
    );
};

HeadingContainer.propTypes = {};
HeadingContainer.defaultProps = {};

export default HeadingContainer;
