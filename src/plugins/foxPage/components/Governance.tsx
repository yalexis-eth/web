import { Box, Flex } from '@chakra-ui/layout'
import { Button, Link, Text as CText, useColorModeValue } from '@chakra-ui/react'
import { useTranslate } from 'react-polyglot'
import { fox } from 'test/mocks/assets'
import { Amount } from 'components/Amount/Amount'
import { AssetIcon } from 'components/AssetIcon'
import { Card } from 'components/Card/Card'
import { Text } from 'components/Text/Text'
import { BigNumber } from 'lib/bignumber/bignumber'

export const Governance = () => {
  const translate = useTranslate()
  const linkColor = useColorModeValue('blue.500', 'blue.200')

  return (
    <Card display='block' width='full'>
      <Card.Header>
        <Flex flexDirection='row' justifyContent='space-between' alignItems='center' mb={2}>
          <CText fontWeight='bold' color='inherit'>
            {translate('plugins.foxPage.governanceTitle')}
          </CText>
          <Link isExternal href={'#'} fontWeight='semibold' color={linkColor}>
            <Text translation='plugins.foxPage.seeAllProposals' />
          </Link>
        </Flex>
        <Text
          translation='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget elit faucibus'
          color='gray.500'
        />
      </Card.Header>
      <Card.Body></Card.Body>
    </Card>
  )
}
