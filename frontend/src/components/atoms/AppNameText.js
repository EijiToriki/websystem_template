import React from 'react'
import Typography from '@mui/material/Typography';

export default function AppNameText() {
  return (
    <Typography
      component="h1"
      variant="h4"
      color="inherit"
      noWrap
      sx={{ flexGrow: 1 }}
      textAlign="center"
    >
      AppName
    </Typography>
  )
}
