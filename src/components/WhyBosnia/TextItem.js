import React from 'react';
import './TextItem.css'

const TextItem = ({title, text, style, image}) => {
    return (
        <div className={'TextItem'} style={{...style}}>
            <div className={'TextItem-line'}/>
            <div>
                <div className={'TextItem-title'}>{title}</div>
                <div className={'TextItem-text'}>{text}</div>
            </div>


            <div className={'sight-image'}><img src={image} alt={title}/></div>
        </div>
    );
};

TextItem.propTypes = {};
TextItem.defaultProps = {};

export default TextItem;
