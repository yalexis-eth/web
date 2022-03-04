import { Flex } from '@chakra-ui/react'
import { YearnVaultApi } from '@shapeshiftoss/investor-yearn'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom'
import { RouteSteps } from 'components/RouteSteps/RouteSteps'
import { RawText } from 'components/Text'

enum WithdrawPath {
  Withdraw = '/',
  Confirm = '/confirm',
  ConfirmSettings = '/confirm/settings',
  Status = '/status'
}

export const routes = [
  { step: 0, path: WithdrawPath.Withdraw, label: 'Amount' },
  { step: 1, path: WithdrawPath.Confirm, label: 'Confirm' },
  { path: WithdrawPath.ConfirmSettings, label: 'Confirm Settings' },
  { step: 2, path: WithdrawPath.Status, label: 'Status' }
]

export type YearnWithdrawProps = {
  api: YearnVaultApi
}

export const FoxyWithdraw = () => {
  const location = useLocation()

  const renderRoute = (route: { step?: number; path: string; label: string }) => {
    switch (route.path) {
      case WithdrawPath.Withdraw:
        return <RawText>Withdraw Amount</RawText>

      case WithdrawPath.Confirm:
        return <RawText>Withdraw Confirm</RawText>
      case WithdrawPath.Status:
        return <RawText>Status of Withdraw</RawText>
      default:
        throw new Error('Route does not exist')
    }
  }

  return (
    <Flex width='full' minWidth={{ base: '100%', xl: '500px' }} flexDir='column'>
      <RouteSteps routes={routes} location={location} />
      <Flex flexDir='column' width='full' minWidth='400px'>
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
