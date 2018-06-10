import React from 'react'

class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            over: false
        }
    }


    render() {
        let {over} = this.state

        let {images, name, description, price} = this.props.product
        let backGroundImage = over ? images[0] : images[1]
        let backGround = {
            backgroundImage: `url(${backGroundImage})`,
            backgroundPosition:'center',
            backgroundSize: 'cover'
        }
        let layer = {
            backgroundColor: 'rgba(58, 192, 199, 0.3)',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2
        }
        return (
            <div className={'Product'} onMouseOver={() => this.setState({over: true})}
                 onMouseLeave={() => this.setState({over: false})} style={backGround}>
                {/*<img className={'product-image'} src={backGroundImage}/>*/}

                {!over && name && <div className={'product-name'}>{name}</div>}

                {over && description && <div className={'product-description'}>{description}</div>}

                {over && price && <div className={'product-price'}>{price}</div>}

                {over && <div className="layer" style={layer}/>}

            </div>
        )
    }
}

export default Product