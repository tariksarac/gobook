import React from 'react';
import './Heading.css';

const Heading = ({ subTitle, mainTitle, hasLine, color, margin, about, style, large, absolute, headingPrice, headingDiscount,children }) => {
    return (
        <div className={'Heading'} style={{ ...style }}>

            {mainTitle && (
                <h1 className={`main-heading ${large && 'large'}`} >
                    {mainTitle}
                </h1>
            )} {hasLine && <div className={'line'} />}

            {subTitle && <h2 className={'sub-heading'}>{subTitle}</h2>}
            {about && <h3 className={'sub-heading-about'}>{about}</h3>}
            {headingPrice && <h3 className={'heading-price'}>{headingPrice}</h3>}
            {headingDiscount && <h3 className={'heading-discount'}>{headingDiscount}</h3>}

            {children}

        </div>
    );
};
export default Heading;
