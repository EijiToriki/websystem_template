import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import HeadSideBarOrganism from './organisms/HeadSideBarOrganism';

export const drawerWidth = 240;

export default function HeadSidebar({isAuth, setIsAuth}) {
  const [open, setOpen] = React.useState(true);
  const [selected, setSelected] = React.useState(-1)
  const navigate = useNavigate()

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.clear()
    setIsAuth(false)
    navigate("/login")
  }

  return (
    <>
      <HeadSideBarOrganism 
        open={open} 
        toggleDrawer={toggleDrawer} 
        handleLogout={handleLogout} 
        isAuth={isAuth} 
        selected={selected}
        setSelected={setSelected}
      />
    </>
  )
}
