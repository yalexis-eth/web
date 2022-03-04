import { Flex } from '@chakra-ui/react'
import { YearnVaultApi } from '@shapeshiftoss/investor-yearn'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { RouteSteps } from 'components/RouteSteps/RouteSteps'
import { RawText } from 'components/Text'

enum DepositPath {
  Deposit = '/',
  Approve = '/approve',
  ApproveSettings = '/approve/settings',
  Confirm = '/confirm',
  ConfirmSettings = '/confirm/settings',
  Status = '/status'
}

export const routes = [
  { step: 0, path: DepositPath.Deposit, label: 'Deposit' },
  { step: 1, path: DepositPath.Approve, label: 'Approve' },
  { path: DepositPath.ApproveSettings, label: 'Approve Settings' },
  { step: 2, path: DepositPath.Confirm, label: 'Confirm' },
  { path: DepositPath.ConfirmSettings, label: 'Confirm Settings' },
  { step: 3, path: DepositPath.Status, label: 'Status' }
]

export type YearnDepositProps = {
  api: YearnVaultApi
}

export const FoxyDeposit = () => {
  const location = useLocation()

  const renderRoute = (route: { step?: number; path: string; label: string }) => {
    switch (route.path) {
      case DepositPath.Deposit:
        return <RawText>Deposit Amount</RawText>
      case DepositPath.Approve:
        return <RawText>Approve</RawText>
      case DepositPath.Confirm:
        return <RawText>Confirm</RawText>
      case DepositPath.Status:
        return <RawText>Deposit Status</RawText>
      default:
        throw new Error('Route does not exist')
    }
  }

  return (
    <Flex width='full' minWidth={{ base: '100%', xl: '500px' }} flexDir='column'>
      <RouteSteps routes={routes} location={location} />
      <Flex flexDir='column' width='full' minWidth='500px'>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.key}>
            {routes.map(route => {
              return (
                <Route exact key={route.path} render={() => renderRoute(route)} path={route.path} />
              )
            })}
          </Switch>
        </AnimatePresence>
      </Flex>
    </Flex>
  )
}
