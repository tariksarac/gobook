import React from 'react';
import PropTypes from 'prop-types';
import './Line.css'

const Line = ({color, full}) => {
    return (
        <div className={'go-book-line'} style={{backgroundColor: color, width: full && '100%'}}/>
    );
};

Line.propTypes = {
    color: PropTypes.string
};
Line.defaultProps = {
    color:'#33a3fc'
};

export default Line;
