import React, { createContext, useReducer, useEffect } from 'react'
import { ProductReducer } from '../reducers/product-reducer'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
    const [products, dispatch] = useReducer( ProductReducer, [], ()=> {
        const localData = localStorage.getItem('products')
        return localData ? JSON.parse(localData) : []
    })
        /*[
        {
            id: 1,
            title: 'Store Item One',
            img: '',
            price: 12,
            description: 'This is some demo text for item One',
            inCart: false,
            count: 0,
            total: 0
         },
         {
            id: 2,
            title: 'Store Item One',
            img: '',
            price: 12,
            description: 'This is some demo text for item One',
            inCart: false,
            count: 0,
            total: 0
         },
         {
            id: 3,
            title: 'Store Item One',
            img: '',
            price: 12,
            description: 'This is some demo text for item One',
            inCart: false,
            count: 0,
            total: 0
         }
    ])*/
    /*
    const addProduct = (title, img, price, description) => {
        setProducts([...products, {title, img, price, description, id: uuid(), inCart: false, count: 0}])
    }
    const removeProduct = (id) => {
        setProducts(products.filter(product=> product.id !== id))
    }
    */
   useEffect(()=> {
       localStorage.setItem('products', JSON.stringify(products))
   },[products])
    return (
        <ProductContext.Provider value={{products, dispatch}}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider