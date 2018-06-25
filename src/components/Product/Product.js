import React from 'react';
import { withRouter } from 'react-router-dom';

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      over: false,
    };
  }

  render() {
    let { over } = this.state;
    let { gallery, title, name, price } = this.props.product;
    let backGroundImage = over && gallery && gallery.length > 1 ? gallery[0] : gallery[1];
    let backGround = {
      backgroundImage: `url(${backGroundImage.original})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };
    let layer = {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
    };
    return (
      <div
        className={'Product'}
        onMouseOver={() => this.setState({ over: true })}
        onMouseLeave={() => this.setState({ over: false })}
        style={backGround}
        onClick={() => this.props.history.push(`/tour/${name}`)}
      >

        {!over && title && <div className={'product-name'}>{title}</div>}

                {over && name && <div className={'product-name'}>{name}</div>}

        {price && (
          <div
            className={'product-name product-price'}
            style={{ display: over && 'block' }}
          >
            {price}
          </div>
        )}

        {over && <div className="layer" style={layer} />}
      </div>
    );
  }
}

export default withRouter(Product);
