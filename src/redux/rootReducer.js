import {combineReducers} from 'redux'
import authReducer from './auth/authReducer'
import collectionReducer from './collection/collectionReducer'
import productReducer from './product/productReducer'
import shopReducer from './shop/shopReducer'
import productPreviewReducer from './productpreview/productPreviewReducer'
import cartReducer from './cart/cartReducer'
import paymentHistoryReducer from './paymenthistory/paymentHistoryReducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer,
    categories: collectionReducer,
    products: productReducer,
    shop: shopReducer,
    productPreview: productPreviewReducer,
    cart: cartReducer,
    paymentHistory: paymentHistoryReducer, 
})

export default persistReducer(persistConfig, rootReducer);