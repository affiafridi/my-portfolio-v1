import React from 'react'
import { useColorMode, IconButton, DarkMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function DarkModeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode()
    console.log('ColorMode', colorMode)
    const iconColor = {
        light: 'dark',
        dark: 'light'
    }

  return (
    // <MoonIcon  color={'whiteAlpha.800'} fontSize={20} onClick={toggleColorMode}/>
    <>
        <IconButton
            aria-label='Toggle Dark Mode'
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon color={'dark'}/>}
            onClick={toggleColorMode}
            color={iconColor[colorMode] }
        />
    </>
  )
}

export default DarkModeSwitch