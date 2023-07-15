import React from 'react'
import TextField from '@mui/material/TextField';

export default function UserNameField() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="username"
      label="ユーザ名"
      name="username"
      autoComplete="username"
      autoFocus
    />
  )
}
