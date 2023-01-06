import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    productTopRatedReducer,
    productDetailsReducer,
    productAllDetailsReducer,
    productDeleteReducer,
    productListReducer,
    productCreateReducer,
    productUpdateReducer
} from './reducers/productReducers'

import { userRegisterReducer,
    userLoginReducer,
    userListReducer,
    userDeleteReducer,

    userDetailsReducer,
    userUpdateProfileReducer,

    userUpdateReducer
 } from './reducers/userReducer'


 import {
    orderCreateReducer,
    orderDetailsReducer,
    orderListMyReducer,
    orderListReducer
    
} from './reducers/orderReducers'

 import { cartReducer } from './reducers/cartReducers'

const reducer = combineReducers({
    productTopRated: productTopRatedReducer,
    productDetails: productDetailsReducer,
    allProductsDetails:productAllDetailsReducer,
    productDelete:productDeleteReducer,
    productList:productListReducer,
    productCreate:productCreateReducer,
    productUpdate:productUpdateReducer,



    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userList:userListReducer,
    userDelete: userDeleteReducer,

    userDetails:userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,

    userUpdate: userUpdateReducer,


    cart: cartReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderListMy: orderListMyReducer,
    orderList:orderListReducer


    
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null



const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}




const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store