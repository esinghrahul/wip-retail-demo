import styled from 'styled-components'

export const CartButton = styled.button`
font-size: 1.3rem;
background: transparent;
border: none;
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.4s ease-in-out;
&:hover{
    background: var(--lightBlue);
    color: var(--mainBlue)
}
&:focus{
    outline: none;
}
`