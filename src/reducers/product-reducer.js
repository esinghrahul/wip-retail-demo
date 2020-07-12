import {v4 as uuid} from 'uuid'

export const ProductReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PRODUCT':
            return [...state, {
                id: uuid(),
                title: action.product.title,
                description: action.product.description,
                img: action.product.img,
                price: action.product.price
            }]
        case 'REMOVE_PRODUCT':
            return state.filter(product => product.id !== action.id)
        default:
            return state
    }
}