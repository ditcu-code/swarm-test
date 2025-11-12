import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserProfile } from './types'

interface UserState {
  profile: UserProfile | null
  isAuthenticated: boolean
}

const initialState: UserState = {
  profile: null,
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<UserProfile | null>) {
      state.profile = action.payload
      state.isAuthenticated = !!action.payload
    },
    logout(state) {
      state.profile = null
      state.isAuthenticated = false
    },
  },
})

export const { setProfile, logout } = userSlice.actions
export default userSlice.reducer
