import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './common/layout/components/navbar/navbar';

import {AuthRoutes, GreenRoutes } from './routers/index';
import { AppTheme } from './styles/themes';
import {SideBar} from './common/layout/components/sidebar/siderBar'
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { MainRouter } from './routers/mainRouter';

export const GreenApp = ({children}) => {

 const widthOfSidebar = 240;



  return (

    <AppTheme>

    <Box sx={{display: 'flex'}}>

      <Navbar drawerWidth={widthOfSidebar}/>
      <SideBar drawerWidth={widthOfSidebar}/>
      <Box
        component='main'
        sx={{flexGrow: 1, p: 3}}
      >
        <Toolbar/>
        {children}

        <MainRouter/>
        
      </Box>

    </Box>


    </AppTheme>
  )
}
