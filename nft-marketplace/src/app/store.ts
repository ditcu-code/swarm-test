import { configureStore } from '@reduxjs/toolkit'
import nftReducer from '../features/nft/nftSlice'
import userReducer from '../features/user/userSlice'

export const store = configureStore({
  reducer: {
    nft: nftReducer,
    user: userReducer,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

