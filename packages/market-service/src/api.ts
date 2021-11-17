import { GetByMarketCapType, MarketDataType, PriceHistoryType } from '@shapeshiftoss/types'

export interface MarketService {
  baseUrl: string
  getMarketData: MarketDataType
  getPriceHistory: PriceHistoryType
  getByMarketCap: GetByMarketCapType
}