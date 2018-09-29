import React from 'react';
import PropTypes from 'prop-types';
import './Line.css'

const Line = ({color}) => {
    return (
        <div className={'go-book-line'} style={{backgroundColor: color}}/>
    );
};

Line.propTypes = {
    color: PropTypes.string
};
Line.defaultProps = {
    color:'#33a3fc'
};

export default Line;
