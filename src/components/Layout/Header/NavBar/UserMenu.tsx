import { ChevronDownIcon } from '@chakra-ui/icons'
import { Menu, MenuButton, MenuGroup, MenuItem, MenuList } from '@chakra-ui/menu'
import { Button, ButtonGroup, MenuButtonProps, Stack, useColorModeValue } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { FaWallet } from 'react-icons/fa'
import { useTranslate } from 'react-polyglot'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import { WalletConnectedRoutes } from 'components/Layout/Header/NavBar/hooks/useMenuRoutes'
import { WalletConnectedMenu } from 'components/Layout/Header/NavBar/WalletConnectedMenu'
import { WalletImage } from 'components/Layout/Header/NavBar/WalletImage'
import { MiddleEllipsis } from 'components/MiddleEllipsis/MiddleEllipsis'
import { RawText, Text } from 'components/Text'
import { WalletActions } from 'context/WalletProvider/actions'
import type { InitialState } from 'context/WalletProvider/WalletProvider'
import { useWallet } from 'hooks/useWallet/useWallet'
import { ensReverseLookup } from 'lib/address/ens'

export const entries = [WalletConnectedRoutes.Connected]

const NoWallet = ({ onClick }: { onClick: () => void }) => {
  const translate = useTranslate()
  return (
    <MenuGroup title={translate('common.noWallet')} ml={3} color='gray.500'>
      <MenuItem onClick={onClick} alignItems='center' justifyContent='space-between'>
        {translate('common.connectWallet')}
        <ChevronDownIcon />
      </MenuItem>
    </MenuGroup>
  )
}

export type WalletConnectedProps = {
  onDisconnect: () => void
  onSwitchProvider: () => void
} & Pick<InitialState, 'walletInfo' | 'isConnected' | 'type'>

export const WalletConnected = (props: WalletConnectedProps) => {
  return (
    <MemoryRouter initialEntries={entries}>
      <Switch>
        <Route path='/'>
          <WalletConnectedMenu
            isConnected={props.isConnected}
            walletInfo={props.walletInfo}
            onDisconnect={props.onDisconnect}
            onSwitchProvider={props.onSwitchProvider}
            type={props.type}
          />
        </Route>
      </Switch>
    </MemoryRouter>
  )
}

type WalletButtonProps = {
  isConnected: boolean
  isDemoWallet: boolean
  isLoadingLocalWallet: boolean
  onConnect: () => void
} & Pick<InitialState, 'walletInfo'> &
  MenuButtonProps

const WalletButton: FC<WalletButtonProps> = ({
  isConnected,
  isDemoWallet,
  walletInfo,
  onConnect,
  isLoadingLocalWallet,
  ...rest
}) => {
  const [walletLabel, setWalletLabel] = useState('')
  const [shouldShorten, setShouldShorten] = useState(true)
  const color = useColorModeValue('black', 'white')

  useEffect(() => {
    console.info(walletInfo)
    ;(async () => {
      setWalletLabel('')
      setShouldShorten(true)
      if (!walletInfo || !walletInfo.meta) return setWalletLabel('')
      if (walletInfo.meta.address) {
        try {
          const addressReverseLookup = await ensReverseLookup(walletInfo.meta.address)
          if (!addressReverseLookup.error) {
            setShouldShorten(false)
            return setWalletLabel(addressReverseLookup.name)
          }
          return setWalletLabel(walletInfo?.meta?.address ?? '')
        } catch (_) {
          return setWalletLabel(walletInfo?.meta?.address ?? '')
        }
      }
      if (walletInfo.meta.label) {
        setShouldShorten(false)
        return setWalletLabel(walletInfo.meta.label)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletInfo?.deviceId])

  return Boolean(walletInfo?.deviceId) || isLoadingLocalWallet ? (
    <MenuButton
      as={Button}
      width='full'
      height='auto'
      py={2}
      variant='ghost'
      color={color}
      iconSpacing={4}
      pl={2}
      justifyContent='flex-start'
      rightIcon={<ChevronDownIcon ml='auto' />}
      leftIcon={
        <WalletImage
          walletInfo={walletInfo}
          isLoading={isLoadingLocalWallet}
          hasError={!(isConnected || isDemoWallet)}
        />
      }
      {...rest}
    >
      <Stack spacing={0} justifyContent='flex-start' alignItems='flex-start'>
        <RawText fontSize='xs' color='gray.500' lineHeight='short'>
          Ethereum
        </RawText>
        {walletLabel ? (
          <MiddleEllipsis rounded='lg' shouldShorten={shouldShorten} value={walletLabel} />
        ) : (
          <RawText>{walletInfo?.name}</RawText>
        )}
      </Stack>
    </MenuButton>
  ) : (
    <Button onClick={onConnect} leftIcon={<FaWallet />}>
      <Text translation='common.connectWallet' />
    </Button>
  )
}

export const UserMenu: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const { state, dispatch, disconnect } = useWallet()
  const { isConnected, isDemoWallet, walletInfo, type, isLocked } = state

  if (isLocked) disconnect()
  const hasWallet = Boolean(walletInfo?.deviceId)
  const handleConnect = () => {
    onClick && onClick()
    dispatch({ type: WalletActions.SET_WALLET_MODAL, payload: true })
  }

  useEffect(() => {
    console.info('state changed')
  }, [state])

  return (
    <ButtonGroup isAttached width='full'>
      <Menu>
        <WalletButton
          aria-label='Open wallet dropdown menu'
          onConnect={handleConnect}
          walletInfo={walletInfo}
          isConnected={isConnected}
          isDemoWallet={isDemoWallet}
          isLoadingLocalWallet={state.isLoadingLocalWallet}
          data-test='navigation-wallet-dropdown-button'
        />
        <MenuList
          maxWidth={{ base: 'full', md: 'xs' }}
          minWidth={{ base: 0, md: 'xs' }}
          overflow='hidden'
          // Override zIndex to prevent InputLeftElement displaying over menu
        >
          {hasWallet ? (
            <WalletConnected
              isConnected={isConnected || isDemoWallet}
              walletInfo={walletInfo}
              onDisconnect={disconnect}
              onSwitchProvider={handleConnect}
              type={type}
            />
          ) : (
            <NoWallet onClick={handleConnect} />
          )}
        </MenuList>
      </Menu>
    </ButtonGroup>
  )
}
