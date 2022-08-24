import { WarningTwoIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import { CircularProgress } from 'components/CircularProgress/CircularProgress'
import { InitialState } from 'context/WalletProvider/WalletProvider'

type WalletImageProps = Pick<InitialState, 'walletInfo'> & {
  isLoading?: boolean
  hasError?: boolean
}

export const WalletImage = ({ walletInfo, isLoading, hasError }: WalletImageProps) => {
  const Icon = walletInfo?.icon
  return (
    <Flex
      bg='gray.700'
      width='10'
      height='10'
      borderRadius='md'
      alignItems='center'
      justifyContent='center'
      position='relative'
    >
      {hasError && (
        <WarningTwoIcon
          right={-1}
          top={-1}
          ml={2}
          w={3}
          h={3}
          color='yellow.500'
          position='absolute'
        />
      )}

      {isLoading ? (
        <CircularProgress size='4' />
      ) : Icon ? (
        <Icon width='4' color='white' height='auto' />
      ) : null}
    </Flex>
  )
}
