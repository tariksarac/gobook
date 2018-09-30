import React from 'react';
import './TextItem.css'
import Heading from "../Heading/Heading";
import GoBookPicture from "../Common/GoBookPicture/GoBookPicture";

const TextItem = ({title, text, style, image, color}) => {
    return (
        <div className={'TextItem'} style={{...style}}>
            {/*<div className={'TextItem-line'}/>*/}
            {/*<div>*/}
                {/*<div className={'TextItem-title'}>{title}</div>*/}
                {/*<div className={'TextItem-text'}>{text}</div>*/}
            {/*</div>*/}
            <Heading mainTitle={title} subTitle={text} hasLine color={color}/>
            <GoBookPicture picture={image} color={color}/>

            {/*<div className={'sight-image'}><img src={image} alt={title}/></div>*/}
        </div>
    );
};

TextItem.propTypes = {};
TextItem.defaultProps = {};

export default TextItem;
