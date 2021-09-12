import axios from 'axios'
import * as actionType from '../constants/Cartconsonent'

const url = 'http://localhost:5000'
const addTocart = (id) => async (dispatch) => {
   
    try {
       const {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type:actionType.ADD_TO_CART, payload:data})
    } catch (error) {
        console.log('error in cart---->',error.message)
    }
}

export default addTocart;

export const Removecart = (id) => async (dispatch) =>{
        dispatch({type:actionType.REMOVE_FROM_CART, payload:id})
}
