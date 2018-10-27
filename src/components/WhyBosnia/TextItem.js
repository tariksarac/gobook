import React from 'react';
import './TextItem.css'
import Heading from "../Heading/Heading";
import GoBookPicture from "../Common/GoBookPicture/GoBookPicture";

const TextItem = ({title, text, style, image, color}) => {
    return (
        <div className={'TextItem'} style={{...style}}>
            <Heading mainTitle={title} subTitle={text} hasLine color={color} />
            <GoBookPicture picture={image} color={color} />
        </div>
    );
};

TextItem.propTypes = {};
TextItem.defaultProps = {};

export default TextItem;
