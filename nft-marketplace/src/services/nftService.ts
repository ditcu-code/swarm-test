import { apiClient } from './apiClient'
import type { NFT } from '../features/nft/types'

export async function fetchNfts(): Promise<NFT[]> {
  // Placeholder: replace '/nfts' with real endpoint
  return apiClient.get<NFT[]>('/nfts')
}

