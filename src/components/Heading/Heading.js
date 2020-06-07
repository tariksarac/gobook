import React from 'react';
import Line from '../Common/Line/Line';
import * as Markdown from 'react-markdown';

const Heading = ({
  subTitle,
  mainTitle,
  hasLine,
  color,
  about,
  style,
  large,
  headingPrice,
  headingDiscount,
  children,
  id,
}) => {
  return (
    <div className={'Heading'} style={{ ...style }} id={id}>
      {mainTitle && <h1 className={`main-heading ${large && 'large'}`}>{mainTitle}</h1>}{' '}
      {hasLine && <Line color={color} />}
      {/*{subTitle && <h2 className={'sub-heading'}>{subTitle}</h2>}*/}
      {subTitle && <Markdown className={'sub-heading'} source={subTitle} />}
      {about && <Markdown className={'sub-heading-about'} source={about} />}
      {headingPrice && <h3 className={'heading-price'}>{headingPrice}</h3>}
      {headingDiscount && <h3 className={'heading-discount'}>{headingDiscount}</h3>}
      {children}
    </div>
  );
};
export default Heading;
