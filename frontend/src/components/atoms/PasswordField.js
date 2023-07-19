import React from 'react'
import TextField from '@mui/material/TextField';

export default function PasswordField() {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="パスワード(英数字混合8文字以上)"
      type="password"
      id="password"
      autoComplete="current-password"
    />
  )
}
