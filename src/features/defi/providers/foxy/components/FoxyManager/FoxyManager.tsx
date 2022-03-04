import { Heading, Stack } from '@chakra-ui/layout'
import { ModalHeader, useColorModeValue } from '@chakra-ui/react'
import { DefiActionButtons } from 'features/defi/components/DefiActionButtons'
import { DefiParams } from 'features/defi/contexts/DefiManagerProvider/DefiManagerProvider'
import { AnimatePresence } from 'framer-motion'
import { Location } from 'history'
import { MemoryRouter, Route, Switch, useLocation, useParams } from 'react-router'
import { SlideTransition } from 'components/SlideTransition'
import { RawText } from 'components/Text'

import { FoxyDeposit } from './Deposit/FoxyDeposit'
import { FoxyWithdraw } from './Withdraw/FoxyWithdraw'

enum YearnPath {
  Deposit = '/defi/vault/yearn/deposit',
  Withdraw = '/defi/vault/yearn/withdraw',
  Overview = `/defi/vault/yearn/overview`
}

type YearnRouteProps = {
  parentLocation: Location
} & DefiParams

const FoxyRoutes = ({ parentLocation, provider, earnType }: YearnRouteProps) => {
  const headerBg = useColorModeValue('gray.50', 'gray.800')
  return (
    <>
      <ModalHeader bg={headerBg} borderTopRadius='xl'>
        <Stack width='full' alignItems='center' spacing={2}>
          <Heading textTransform='capitalize' textAlign='center' fontSize='md'>
            {provider} {earnType}
          </Heading>
          <DefiActionButtons vaultExpired={false} />
        </Stack>
      </ModalHeader>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={parentLocation} key={parentLocation.key}>
          <Route path={YearnPath.Deposit}>
            <MemoryRouter>
              <SlideTransition>
                <FoxyDeposit />
              </SlideTransition>
            </MemoryRouter>
          </Route>
          <Route path={YearnPath.Withdraw}>
            <MemoryRouter>
              <SlideTransition>
                <FoxyWithdraw />
              </SlideTransition>
            </MemoryRouter>
          </Route>
          <Route path={YearnPath.Overview}>
            <RawText>Overview</RawText>
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  )
}

export const FoxyManager = () => {
  const location = useLocation()
  const params = useParams<DefiParams>()

  return <FoxyRoutes parentLocation={location} {...params} />
}
