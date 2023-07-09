import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import productSlice from './productSlice'
import searchSlice from './searchSlice'
//import {persistStore} from 'redux-persist'


export const store = configureStore({
    reducer:{
        products: productSlice,
        cart: cartSlice,
        search: searchSlice,
    }
})

