import React from 'react'
import Box from '@mui/material/Box';
import UserNameField from '../atoms/UserNameField'
import PasswordField from '../atoms/PasswordField'
import LoginButton from '../atoms/LoginButton'
import LoginOption from './LoginOption'

export default function LoginForm({handleSubmit}) {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <UserNameField />
      <PasswordField />
      <LoginButton />
      <LoginOption />
    </Box>
  )
}
