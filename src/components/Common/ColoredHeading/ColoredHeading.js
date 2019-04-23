import React from 'react';
import PropTypes from 'prop-types';
import './ColoredHeading.css'

const ColoredHeading = ({heading, subheading, color}) => {
    return (
        <div className={'ColoredHeading'} style={{backgroundColor: color}}>
            {heading && <h1>{heading}</h1>}
            {subheading && <h2>{subheading}</h2>}
        </div>
    );
};

ColoredHeading.propTypes = {
    heading: PropTypes.string,
    subheading: PropTypes.string,
    color: PropTypes.string
};
ColoredHeading.defaultProps = {
    heading: '',
    subheading: '',
    color: ''
};

export default ColoredHeading;
