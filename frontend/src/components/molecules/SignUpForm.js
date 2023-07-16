import React from 'react'
import Box from '@mui/material/Box';
import UserNameField from '../atoms/UserNameField';
import PasswordField from '../atoms/PasswordField';
import SignUpButton from '../atoms/SignUpButton';
import AlreadyAccountLink from '../atoms/AlreadyAccountLink';
import PasswordConfirmField from '../atoms/PasswordConfirmField';

export default function SignUpForm({handleSubmit}) {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <UserNameField />
      <PasswordField />
      <PasswordConfirmField />
      <SignUpButton />
      <AlreadyAccountLink />
    </Box>
  )
}
