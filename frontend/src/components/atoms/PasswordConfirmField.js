import React from 'react'
import TextField from '@mui/material/TextField';

export default function PasswordConfirmField() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="passwordConfirm"
      label="パスワード(確認用)"
      type="password"
      id="passwordConfirm"
      autoComplete="current-password"
    />
  )
}