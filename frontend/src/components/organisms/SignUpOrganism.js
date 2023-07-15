import React from 'react'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SignUpHeader from '../molecules/SignUpHeader'
import SignUpForm from '../molecules/SignUpForm'

export default function SignUpOrganism({handleSubmit}) {
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
        <SignUpHeader />
        <SignUpForm handleSubmit={handleSubmit} />
      </Box>
    </Container>
  )
}
