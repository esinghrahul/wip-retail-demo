import React, { useContext } from 'react'
import { ProductContext } from '../context/productcontext'
import { useLocation } from 'react-router-dom'
import { CartContext } from '../context/cartcontext'
import { CartButton } from './button.component'

const ProductDetails = ({product}) => {
    const {dispatch} = useContext(ProductContext)
    const {addItem} = useContext(CartContext)
    const location = useLocation()
    return(
        <>
        <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.img} style={{maxWidth: '540px', maxHeight: '200px'}} className="card-img" alt="Product" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text"><small className="text-muted">{product.price} INR</small></p>
              {location.pathname === '/inventory' && <p className="card-text d-flex justify-content-end"> <CartButton onClick = {()=> dispatch({type: 'REMOVE_PRODUCT', id: product.id})}> <span className="badge badge-pill badge-danger" ><i className="fa fa-trash" aria-hidden="true"></i></span> </CartButton></p> }
              {location.pathname === '/' && <p className="card-text"> <CartButton  onClick = {()=> addItem(product)}><span className="badge badge-pill badge-success"><i className="fas fa-cart-plus"></i></span> Add to Cart</CartButton></p> }
              
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default ProductDetails

