import React from 'react'
import AppBarHeader from '../molecules/AppBarHeader'
import DrawerSideBar from '../molecules/DrawerSideBar'

export default function HeadSideBarOrganism({open, toggleDrawer, handleLogout, isAuth}) {
  return (
    <>
      <AppBarHeader 
        open={open} 
        toggleDrawer={toggleDrawer} 
        handleLogout={handleLogout} 
        isAuth={isAuth} 
      />
      <DrawerSideBar 
        open={open} 
        toggleDrawer={toggleDrawer} 
      />
    </>
  )
}
