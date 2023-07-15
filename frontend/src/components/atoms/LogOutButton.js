import React from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';

export default function LogOutButton({handleLogout}) {
  return (
    <IconButton color="inherit" onClick={handleLogout}>
      <Badge badgeContent={0} color="secondary">
        <LogoutIcon />
      </Badge>
    </IconButton>
  )
}
