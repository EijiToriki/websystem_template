import React from 'react'
import TextField from '@mui/material/TextField';

export default function PasswordField() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="パスワード"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  )
}
