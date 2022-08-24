import { chakra, useColorModeValue } from '@chakra-ui/react'

import { SideNavContent } from './SideNavContent'

export const SideNav = () => {
  const borderColor = useColorModeValue('gray.100', 'gray.750')
  const bgColor = useColorModeValue('white', 'gray.900')
  return (
    <>
      <chakra.header
        paddingTop={`env(safe-area-inset-top)`}
        borderRightWidth={1}
        borderColor={borderColor}
        bg={bgColor}
        left='0'
        right='0'
        height='100vh'
        position='sticky'
        top={0}
        maxWidth='xs'
        flex={{ base: 'inherit', '2xl': '1 1 0%' }}
        display={{ base: 'none', md: 'flex' }}
        zIndex='dropdown'
      >
        <SideNavContent isCompact={true} />
      </chakra.header>
    </>
  )
}
