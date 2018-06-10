import React from 'react'
import Product from "./Product";
import './Product.css'

const ProductsContainer = ({products}) => {
    return(
        <div className={'product-container'}>
            {products && products.map((item, index) => <Product key={index} product={item}/>)}
        </div>
    )
}
export default ProductsContainer