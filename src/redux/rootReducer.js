import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import collectionReducer from './collection/collectionReducer'
import productReducer from './product/productReducer'
import shopReducer from './shop/shopReducer'
import productPreviewReducer from './productpreview/productPreviewReducer'
import cartReducer from './cart/cartReducer'
import paymentHistoryReducer from './paymenthistory/paymentHistoryReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    categories: collectionReducer,
    products: productReducer,
    shop: shopReducer,
    productPreview: productPreviewReducer,
    cart: cartReducer,
    paymentHistory: paymentHistoryReducer, 
})

export default rootReducer;