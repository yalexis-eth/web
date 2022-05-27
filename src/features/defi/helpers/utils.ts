import { ChainId } from '@shapeshiftoss/caip'
import { ChainTypes } from '@shapeshiftoss/types'

export const chainIdToLabel = (chainId: ChainId): string => {
  switch (chainId) {
    case ChainTypes.Cosmos:
      return 'Cosmos'
    case ChainTypes.Osmosis:
      return 'Osmosis'
    default: {
      return ''
    }
  }
}
