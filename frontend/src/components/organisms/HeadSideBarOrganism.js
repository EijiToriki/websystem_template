import React from 'react'
import AppBarHeader from '../molecules/AppBarHeader'
import DrawerSideBar from '../molecules/DrawerSideBar'

export default function HeadSideBarOrganism({open, toggleDrawer, handleLogout, isAuth, selected, setSelected}) {
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
        selected={selected}
        setSelected={setSelected}
      />
    </>
  )
}
