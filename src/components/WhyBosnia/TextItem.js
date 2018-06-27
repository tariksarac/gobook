import React from 'react';
import PropTypes from 'prop-types';
import './TextItem.css'

const TextItem = ({title, text}) => {
    return (
        <div className={'TextItem'}>
            <div className={'TextItem-line'}/>
            <div className={'TextItem-title'}>{title}</div>
            <div className={'TextItem-text'}>{text}</div>
        </div>
    );
};

TextItem.propTypes = {};
TextItem.defaultProps = {};

export default TextItem;
