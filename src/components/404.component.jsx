import React from 'react'
import Title from './title.component'

const PageNotFound = () => {
    return(
        <div className='container'>
            <Title title= 'Error 404' />
            <h3 className= 'py-5 container-fluid text-center d-lg-block'>Page Not Found <hr /> Sorry Mario! Your Princess is in another castle.</h3>
        </div>
    )
}

export default PageNotFound