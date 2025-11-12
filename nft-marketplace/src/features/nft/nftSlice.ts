import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { NFT } from './types'

type Status = 'idle' | 'loading' | 'failed'

export interface NftState {
  items: NFT[]
  status: Status
}

const initialState: NftState = {
  items: [],
  status: 'idle',
}

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<NFT[]>) {
      state.items = action.payload
    },
    setStatus(state, action: PayloadAction<Status>) {
      state.status = action.payload
    },
  },
})

export const { setItems, setStatus } = nftSlice.actions
export default nftSlice.reducer
