import React from 'react';
import PropTypes from 'prop-types';
import './GoBookPicture.css'
import Line from "../Line/Line";

const GoBookPicture = ({picture, color, style}) => {

    const imageStyle = {
        background: `url(${picture}) center / cover no-repeat scroll`,

    }
    return (
        <div className={'GoBookPicture'} >
            <div className={'pict'} style={{...imageStyle, ...style}}/>
            {/*<div className={'bord'} style={{backgroundColor: color}}/>*/}
            <Line color={color} full/>
        </div>
    );
};

GoBookPicture.propTypes = {
    picture: PropTypes.string,
    color: PropTypes.string
};
GoBookPicture.defaultProps = {
    picture: '',
    color: '#33a3fc'
};

export default GoBookPicture;
