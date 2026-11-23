import { configureStore } from '@reduxjs/toolkit'
import auth from './slices/authSlice'
import offers from './slices/offersSlice'

export const makeStore = () => configureStore({ reducer: { auth, offers } })
