import { cosmosAssetId, osmosisAssetId } from '@shapeshiftoss/caip'
import {
  EarnOpportunityType,
  useNormalizeOpportunities,
} from 'features/defi/helpers/normalizeOpportunity'
import { useMemo } from 'react'
import { useFoxEth } from 'context/FoxEthProvider/FoxEthProvider'
import { bnOrZero } from 'lib/bignumber/bignumber'
import { useCosmosSdkStakingBalances } from 'pages/Defi/hooks/useCosmosSdkStakingBalances'
import { selectFeatureFlags } from 'state/slices/selectors'
import { useAppSelector } from 'state/store'

import { useFoxyBalances } from './useFoxyBalances'
import { MergedEarnVault, useVaultBalances } from './useVaultBalances'

export type UseEarnBalancesReturn = {
  opportunities: EarnOpportunityType[]
  totalEarningBalance: string
  loading: boolean
}

export type SerializableOpportuniy = MergedEarnVault

export function useEarnBalances(): UseEarnBalancesReturn {
  const {
    opportunities: foxyArray,
    totalBalance: totalFoxyBalance,
    loading: foxyLoading,
  } = useFoxyBalances()
  const { vaults, totalBalance: vaultsTotalBalance, loading: vaultsLoading } = useVaultBalances()
  const vaultArray: SerializableOpportuniy[] = useMemo(() => Object.values(vaults), [vaults])
  const { cosmosSdkStakingOpportunities, totalBalance: totalCosmosStakingBalance } =
    useCosmosSdkStakingBalances({
      assetId: cosmosAssetId,
    })
  const {
    cosmosSdkStakingOpportunities: osmosisStakingOpportunities,
    totalBalance: totalOsmosisStakingBalance,
  } = useCosmosSdkStakingBalances({
    assetId: osmosisAssetId,
  })
  const { onlyVisibleFoxFarmingOpportunities, foxEthLpOpportunity } = useFoxEth()
  const featureFlags = useAppSelector(selectFeatureFlags)

  const opportunities = useNormalizeOpportunities({
    vaultArray,
    foxyArray,
    cosmosSdkStakingOpportunities: cosmosSdkStakingOpportunities.concat(
      osmosisStakingOpportunities,
    ),
    foxEthLpOpportunity: featureFlags.FoxLP ? foxEthLpOpportunity : undefined,
    foxFarmingOpportunities: featureFlags.FoxFarming
      ? onlyVisibleFoxFarmingOpportunities
      : undefined,
  })
  // When staking, farming, lp, etc are added sum up the balances here
  const totalEarningBalance = bnOrZero(vaultsTotalBalance)
    .plus(totalFoxyBalance)
    .plus(totalCosmosStakingBalance)
    .plus(totalOsmosisStakingBalance)
    .toString()
  return {
    opportunities,
    totalEarningBalance,
    loading: vaultsLoading || foxyLoading,
  }
}
