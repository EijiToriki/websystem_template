import React from 'react'
import Box from '@mui/material/Box';
import PasswordField from '../atoms/PasswordField'
import LoginButton from '../atoms/LoginButton'
import LoginOption from './LoginOption'
import MailField from '../atoms/MailField';

export default function LoginForm({handleSubmit}) {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <MailField />
      <PasswordField />
      <LoginButton />
      <LoginOption />
    </Box>
  )
}
