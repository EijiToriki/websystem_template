import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function MenuIconButton({open, toggleDrawer}) {
  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={toggleDrawer}
      sx={{
        marginRight: '36px',
        ...(open && { display: 'none' }),
      }}
    >
      <MenuIcon />
    </IconButton>
  )
}
