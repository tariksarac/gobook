import React from 'react';
import './Heading.css';

const Heading = ({ subTitle, mainTitle, hasLine, color, margin, about, style, large, absolute }) => {
    return (
        <div className={'Heading'} style={{ ...style }}>

            {mainTitle && (
                <h1 className={`main-heading ${large && 'large'}`} >
                    {mainTitle}
                </h1>
            )}
            {hasLine && <div className={'line'} />}
            {subTitle && <h2 className={'sub-heading'}>{subTitle}</h2>}
            {about && <h3 className={'sub-heading-about'}>{about}</h3>}

        </div>
    );
};
export default Heading;
