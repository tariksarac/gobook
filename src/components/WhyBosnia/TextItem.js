import React from 'react';
import PropTypes from 'prop-types';
import './TextItem.css'

const TextItem = ({title, text, style, image}) => {
    return (
        <div className={'TextItem'} style={{...style}}>
            <div className={'TextItem-line'}/>
            <div className={'TextItem-title'}>{title}</div>
            <div className={'TextItem-text'}>{text}</div>
            <div className={'sight-image'}><img src={image} alt={''}/></div>
        </div>
    );
};

TextItem.propTypes = {};
TextItem.defaultProps = {};

export default TextItem;
