import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {CartButton} from './button.component'

const Navbar = () => {
    return(
        <NavWrapper className= "navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to = '/'>
            <img src="https://img.icons8.com/color/96/000000/shop.png" alt='shop brand'/>
            </Link>
            <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'>
                    <Link to='/' className='nav-link'>products</Link>
                </li>
                <li className='nav-item ml-5'>
                    <Link to='/inventory' className='nav-link'>inventory</Link>
                </li>
            </ul>
            <Link to='/checkout' className='ml-auto'>
                <CartButton>
                    <span className='mr-3'><i className="fas fa-cart-plus" /></span>Cart
                </CartButton>
            </Link>
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.2rem;
        text-transform: capitalize;
    }
`

export default Navbar