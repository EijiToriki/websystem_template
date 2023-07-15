import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LoginHeader from '../molecules/LoginHeader';
import LoginForm from '../molecules/LoginForm';

export default function LoginOrganism({handleSubmit}) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <LoginHeader />
        <LoginForm handleSubmit={handleSubmit} />
      </Box>
    </Container>
  )
}
