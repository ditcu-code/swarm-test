import type { RootState } from '../../app/store'

export const selectNfts = (state: RootState) => state.nft.items
export const selectNftStatus = (state: RootState) => state.nft.status

