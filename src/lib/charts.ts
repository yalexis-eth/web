import isNil from 'lodash/isNil'
import { ChartData } from 'hooks/useBalanceChartData/useBalanceChartData'

import { bnOrZero } from './bignumber/bignumber'

type CalculatePercentChange = (data: ChartData[]) => number

export const calculatePercentChange: CalculatePercentChange = data => {
  const start = data?.[0]?.price
  if (isNil(start)) return 0
  const startBn = bnOrZero(start)
  if (startBn.eq(0)) return Infinity
  return bnOrZero(data?.[data.length - 1]?.price)
    .minus(startBn)
    .div(startBn.abs())
    .times(100)
    .decimalPlaces(2)
    .toNumber()
}
