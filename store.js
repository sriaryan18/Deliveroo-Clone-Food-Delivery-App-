import { configureStore } from '@reduxjs/toolkit'
import  basketReducer  from './redux/storeBasket'

export default configureStore({
  reducer: {
    basket:basketReducer
  },
})