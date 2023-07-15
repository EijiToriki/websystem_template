import React from 'react'
import Avatar from '@mui/material/Avatar';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function SignUpAvatar() {
  return (
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <AssignmentIcon />
    </Avatar>
  )
}
