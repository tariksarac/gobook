import React from 'react';
import PropTypes from 'prop-types';
import './GoBookPicture.css'
import Line from "../Line/Line";

const GoBookPicture = ({picture, color, style, containerStyle}) => {

    const imageStyle = {
        background: `url(${picture}) center / cover no-repeat scroll`,

    }
    return (
        <div className={'GoBookPicture'} style={{...containerStyle, ...style}}>
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
    picture: require('../../../images/clouds-conifer-daylight-371589.jpg'),
    color: '#33a3fc'
};

export default GoBookPicture;
