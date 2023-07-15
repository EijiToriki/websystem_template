import React from 'react'
import Box from '@mui/material/Box';
import UserNameField from '../atoms/UserNameField';
import PasswordField from '../atoms/PasswordField';
import SignUpButton from '../atoms/SignUpButton';
import AlreadyAccountLink from '../atoms/AlreadyAccountLink';

export default function SignUpForm({handleSubmit}) {
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <UserNameField />
      <PasswordField />
      <SignUpButton />
      <AlreadyAccountLink />
    </Box>
  )
}
