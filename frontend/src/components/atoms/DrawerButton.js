import React from 'react'
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export default function DrawerButton({toggleDrawer}) {
  return (
    <IconButton onClick={toggleDrawer}>
      <ChevronLeftIcon />
    </IconButton>
  )
}
