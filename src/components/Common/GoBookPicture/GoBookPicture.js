import React from 'react';
import PropTypes from 'prop-types';
import './GoBookPicture.css'

const GoBookPicture = ({picture, color}) => {

    const imageStyle = {
        background: `url(${picture}) center / cover no-repeat scroll`,

    }
    return (
        <div className={'GoBookPicture'} >
            <div className={'pict'} style={{...imageStyle}}/>
            <div className={'bord'} style={{backgroundColor: color}}/>
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
