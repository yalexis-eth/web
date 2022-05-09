import { Center, Fade, SlideFade } from '@chakra-ui/react'
import { ParentSize } from '@visx/responsive'
import isEmpty from 'lodash/isEmpty'
import { useMemo } from 'react'
import { ChartData } from 'hooks/useBalanceChartData/useBalanceChartData'

import { GraphLoading } from './GraphLoading'
import { PrimaryChart } from './PrimaryChart/PrimaryChart'

type GraphProps = {
  data: ChartData[]
  isLoaded?: boolean
  loading?: boolean
  color?: string
}

export const Graph = ({ data, isLoaded, loading, color }: GraphProps) => {
  return useMemo(
    () => (
      <ParentSize debounceTime={10}>
        {parent =>
          loading || !isLoaded ? (
            <Fade in={loading || !isLoaded}>
              <Center width='full' height={parent.height} overflow='hidden'>
                <GraphLoading />
              </Center>
            </Fade>
          ) : !isEmpty(data) ? (
            <SlideFade in={!loading}>
              <PrimaryChart
                data={data ?? []}
                height={parent.height}
                width={parent.width}
                color={color}
                margin={{
                  top: 16,
                  right: 0,
                  bottom: 60,
                  left: 0,
                }}
              />
            </SlideFade>
          ) : null
        }
      </ParentSize>
    ),
    [color, data, isLoaded, loading],
  )
}
