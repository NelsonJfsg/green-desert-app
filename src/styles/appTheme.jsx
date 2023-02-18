import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'

import {GreenTheme} from './themes'

export const AppTheme = ( {children} ) => {
  return (

    <ThemeProvider theme={GreenTheme}>

      <CssBaseline />

      { children }
    </ThemeProvider>


  )
}
