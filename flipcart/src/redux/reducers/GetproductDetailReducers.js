import * as actiontype from '../constants/productConstant'

const ProductDetailReducers = (state = { product: {} }, action) =>{
    switch(action.type){
        case actiontype.ProductdetailSuccess :
            return {product : action.payload}
            case actiontype.ProductdetailFaild:
                return{error : action.payload}
                default :
                return state
    }
}

export default ProductDetailReducers