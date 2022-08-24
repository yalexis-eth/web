import { HamburgerIcon, InfoIcon } from '@chakra-ui/icons'
import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Text } from 'components/Text'
import { WalletActions } from 'context/WalletProvider/actions'
import { useWallet } from 'hooks/useWallet/useWallet'

import { AutoCompleteSearch } from './AutoCompleteSearch/AutoCompleteSearch'
import { ChainMenu } from './NavBar/ChainMenu'
import { FiatRamps } from './NavBar/FiatRamps'
import { SideNavContent } from './SideNavContent'

export const Header = () => {
  const { onToggle, isOpen, onClose } = useDisclosure()
  const history = useHistory()
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.100', 'gray.750')
  const {
    state: { isDemoWallet },
    dispatch,
  } = useWallet()

  /**
   * FOR DEVELOPERS:
   * Open the hidden flags menu via keypress
   */
  const handleKeyPress = useCallback(
    (event: { altKey: unknown; shiftKey: unknown; keyCode: number }) => {
      if (event.altKey && event.shiftKey && event.keyCode === 70) {
        history.push('/flags')
      }
    },
    [history],
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  const handleBannerClick = () => dispatch({ type: WalletActions.SET_WALLET_MODAL, payload: true })

  return (
    <>
      <Flex
        direction='column'
        bg={bg}
        width='full'
        position='sticky'
        zIndex='docked'
        top={0}
        paddingTop={{ base: isDemoWallet ? 0 : 'env(safe-area-inset-top)', md: 0 }}
      >
        {isDemoWallet && (
          <Box
            bg='blue.500'
            width='full'
            paddingTop={{ base: 'calc(0.5rem + env(safe-area-inset-top))', md: 0 }}
            paddingBottom={{ base: '0.5rem', md: 0 }}
            minHeight='2.5rem'
            fontSize={{ base: 'sm', md: 'md' }}
            as='button'
            onClick={handleBannerClick}
          >
            <HStack
              verticalAlign='middle'
              justifyContent='center'
              spacing={3}
              color='white'
              wrap='wrap'
            >
              <InfoIcon boxSize='1.3em' />
              <Text display='inline' fontWeight='bold' translation='navBar.demoMode' />
              <Text display='inline' translation='navBar.clickToConnect' />
            </HStack>
          </Box>
        )}
        <HStack height='4.5rem' width='full' px={4} borderBottomWidth={1} borderColor={borderColor}>
          <HStack width='full' margin='0 auto' spacing={0} columnGap={4}>
            <Box flex={1} display={{ base: 'block', md: 'none' }}>
              <IconButton
                aria-label='Open menu'
                variant='ghost'
                onClick={onToggle}
                icon={<HamburgerIcon />}
              />
            </Box>
            {/* <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
              <Link to='/'>
                <FoxIcon ml={{ base: 0, '2xl': 4 }} boxSize='7' />
              </Link>
            </Flex> */}

            <Flex justifyContent='flex-start' flex={1} gap={4}>
              <Box display={{ base: 'none', md: 'block' }}>
                <FiatRamps />
              </Box>
            </Flex>
            <HStack
              width='100%'
              flex={1}
              justifyContent='flex-end'
              alignItems='flex-end'
              display={{ base: 'none', md: 'flex' }}
            >
              <AutoCompleteSearch />
            </HStack>
          </HStack>
        </HStack>
      </Flex>
      <Drawer isOpen={isOpen} onClose={onClose} placement='left'>
        <DrawerOverlay />
        <DrawerContent
          paddingTop='env(safe-area-inset-top)'
          paddingBottom='max(1rem, env(safe-area-inset-top))'
          overflowY='auto'
        >
          <SideNavContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  )
}
