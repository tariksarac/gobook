import React from 'react';
import Product from './Product';
import './Product.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { mobile } from '../../index';
import UAParser from 'ua-parser-js';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ProductsContainer = ({ products, deviceType, isMobile }) => {
  return (
    <Carousel
      deviceType={deviceType}
      // centerMode={false} arrows={true}
      swipeable={true}
      showDots={!mobile ? products.length > 3 : false}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      autoPlay={false}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="product-container"
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      renderDotsOutside={false}
    >
      {products && products.map((item, index) => <Product key={index} product={item} />)}
    </Carousel>
  );
};

ProductsContainer.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';
  return { deviceType };
};
export default ProductsContainer;
