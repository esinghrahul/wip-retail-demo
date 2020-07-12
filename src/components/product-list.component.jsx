import React, { useContext } from 'react'
import { ProductContext } from '../context/productcontext'
import ProductDetails from './product-details.component'
import Title from './title.component'

const ProductList = () => {
    const {products} = useContext(ProductContext)
    return products.length ? ( 
        <>
            <div className="container">
                <Title title='List of Products' />
                    
                {products.map(product => {
                    return (<ProductDetails product={product} key= {product.id} />)
                })}
            </div>
        </>
        ) : 
    (
        <h3 className = "py-5 container-fluid text-center d-lg-block">Add items to inventory to get started.</h3>
    )
}

export default ProductList


