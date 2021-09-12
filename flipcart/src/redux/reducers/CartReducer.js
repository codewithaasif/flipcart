import * as actiontype from '../constants/Cartconsonent'

export const addTocartReducer = (state = { cartItems:[] }, action) =>{
    switch(action.type){
        case actiontype.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product => product.id === item.id)
            if(exist)return ;
                 return {...state, cartItems: [...state.cartItems, item]};

        case actiontype.REMOVE_FROM_CART:
                 return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload )}
        default:
            return state
    }

}
