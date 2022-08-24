import { DefiProvider } from 'features/defi/contexts/DefiManagerProvider/DefiCommon'
import { EarnOpportunityType } from 'features/defi/helpers/normalizeOpportunity'
import { useEffect, useState } from 'react'
import {
  selectFeatureFlags,
  selectFoxEthLpOpportunity,
  selectFoxFarmingOpportunities,
} from 'state/slices/selectors'
import { useAppSelector } from 'state/store'

import { ExternalOpportunity } from '../FoxCommon'

export const useDefiOpportunity = (opportunity: ExternalOpportunity) => {
  const [defiOpportunity, setDefiOpportunity] = useState<EarnOpportunityType | null>(null)
  const foxFarmingOpportunities = useAppSelector(selectFoxFarmingOpportunities)
  const foxEthLpOpportunity = useAppSelector(selectFoxEthLpOpportunity)
  const featureFlags = useAppSelector(selectFeatureFlags)

  useEffect(() => {
    if (!opportunity.opportunityProvider) return
    if (!featureFlags.FoxLP && !featureFlags.FoxFarming) return
    switch (opportunity.opportunityProvider) {
      case DefiProvider.FoxFarming:
        if (!featureFlags.FoxFarming) return
        const foxFarmingOpportunity = foxFarmingOpportunities.find(
          foxFarmingOpportunity =>
            foxFarmingOpportunity.contractAddress === opportunity.opportunityContractAddress,
        )
        if (!foxFarmingOpportunity) return
        setDefiOpportunity(foxFarmingOpportunity)
        break
      case DefiProvider.FoxEthLP:
        if (!featureFlags.FoxLP) return
        setDefiOpportunity(foxEthLpOpportunity)
        break
      default:
        return
    }
  }, [
    featureFlags.FoxFarming,
    featureFlags.FoxLP,
    foxEthLpOpportunity,
    foxFarmingOpportunities,
    opportunity.opportunityContractAddress,
    opportunity.opportunityProvider,
  ])
  return { defiOpportunity }
}
