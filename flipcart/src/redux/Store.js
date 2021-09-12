import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import geProductReducers from './reducers/ProductReducers'
import ProductDetailReducers from './reducers/GetproductDetailReducers'
import {addTocartReducer} from './reducers/CartReducer'

const reducers = combineReducers({
    getProducts:geProductReducers,
    getProductsDetail:ProductDetailReducers,
    cartItems:addTocartReducer
})

const middleWare = [thunk]

const Store = createStore (
    reducers,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default Store
