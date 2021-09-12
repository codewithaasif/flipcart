import * as actiontype from '../constants/productConstant'


const geProductReducers = (state = { products: [] }, action) => {
   switch (action.type) {
      case actiontype.success:
         return { products: action.payload }
      case actiontype.fail:
         return { error: action.payload }
         default:
            return state
   }
}
export default geProductReducers
