import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import { persistStore } from 'redux-persist'

export const store= createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export const persistor = persistStore(store)

