import React from 'react';
import './Heading.css';

const Heading = ({ subTitle, heading, line, color, margin, about, style, large }) => {
    return (
        <div className={'Heading'} style={{ ...style }}>
            {heading && (
                <h1 className={`main-heading ${large && 'large'}`} >
                    {heading}
                </h1>
            )}
            {line && <div className={'line'} />}
            {subTitle && <h2 className={'sub-heading'}>{subTitle}</h2>}
            {about && <h3 className={'sub-heading-about'}>{about}</h3>}
        </div>
    );
};
export default Heading;
