import { configureStore } from '@reduxjs/toolkit'
import offers from './slices/offersSlice'

export const makeStore = () => configureStore({ reducer: { offers } })
