import React from 'react'
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIconButton from '../atoms/MenuIconButton';
import AppNameText from '../atoms/AppNameText';
import LogOutButton from '../atoms/LogOutButton';
import { drawerWidth } from '../HeadSidebar';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarHeader({open, toggleDrawer, handleLogout, isAuth}) {
  return (
    <AppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        
        <MenuIconButton open={open} toggleDrawer={toggleDrawer} />
        <AppNameText />
        {isAuth ?
          <LogOutButton handleLogout={handleLogout} />
        :
          ''
        }
      </Toolbar>
    </AppBar>
  )
}
