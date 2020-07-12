import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/productcontext'
import { CartButton } from './button.component'

const ProductForm = () => {
    const {dispatch} =  useContext(ProductContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [price, setPrice] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_PRODUCT', product: {
            title, description, img, price
        }})
        setPrice(0)
        setTitle('')
        setDescription('')
        setImg('')
    }
    return(
        <form onSubmit = {handleSubmit}>
        <div className='container'>
            <div className = 'py-5 px-2'>
            <div className='form-group row'>
                <div className= 'col'>
                    <input type= "text" className='form-control' placeholder= "Product Title" value= {title} onChange = {(e)=> setTitle(e.target.value)} required />
                </div>
                <div className= 'col'>
                    <input type= "number" className='form-control' placeholder= "Product Price" value= {price} onChange = {(e)=> setPrice(e.target.value)} required />
                </div>
            </div>
            <div className='form-group row'>
                <input type= "url" className='form-control' placeholder= "Product Image URL" value= {img} onChange = {(e)=> setImg(e.target.value)} required />
            </div>
            <div className= 'form-group row'>
                <textarea className='form-control' placeholder= "Product Description" value= {description} onChange = {(e)=> setDescription(e.target.value)} required />
            </div>
            <div className = 'col-auto text-center'>
            <CartButton type="submit">
            <span className="badge badge-pill badge-success"><i className="fa fa-plus" aria-hidden="true"></i></span>
            </CartButton>
            </div>
            </div>
            </div>
        </form>
     )
}

export default ProductForm


