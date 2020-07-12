import React from 'react'
import Title from './title.component'
import ProductForm from './product-form.component'
import ProductList from './product-list.component'

const Inventory = () => {
    return(
        <>
            <div className='container'>
                <Title title='inventory' />
                <div className="card mb-3">
                    <ProductForm />
                </div>
            </div>
            <div className= 'container'>
            <ProductList />
        </div>  
        </>
    )
}

export default Inventory