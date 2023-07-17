import React from 'react'
import TextField from '@mui/material/TextField';

export default function MailField() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="メールアドレス"
      type="email"
      name="email"
      autoComplete="email"
    />
  )
}
