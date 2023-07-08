import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';

export default function MainContents() {
  const navigate = useNavigate()
  return (
    <>
      <ListSubheader component="div" inset>
        Main Contents
      </ListSubheader>

      <ListItemButton onClick={() => navigate('/main1')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main1" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate('/main2')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main2" />
      </ListItemButton>

      <ListItemButton onClick={() => navigate('/main3')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Main3" />
      </ListItemButton>
    </>
  )
}
