import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';

export default function MainContents({selected, setSelected}) {
  const navigate = useNavigate()

  const handleClick = (path, id) => {
    setSelected(id)
    navigate(`/${path}`)
  }

  return (
    <>
      <ListSubheader component="div" inset>
        Main Contents
      </ListSubheader>

      <ListItemButton onClick={() => handleClick('main1', 1)} sx={ selected===1 ? { backgroundColor: '#e0e0e0' } : {}} >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main1" />
      </ListItemButton>

      <ListItemButton onClick={() => handleClick('main2', 2)} sx={ selected===2 ? { backgroundColor: '#e0e0e0' } : {}} >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main2" />
      </ListItemButton>

      <ListItemButton onClick={() => handleClick('main3', 3)} sx={ selected===3 ? { backgroundColor: '#e0e0e0' } : {}} >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main3" />
      </ListItemButton>
    </>
  )
}
