import React from 'react'
import Alert from '@mui/material/Alert';

export default function PasswordAlert({setPasswordError}) {
  return (
    <Alert severity="warning" onClose={() => setPasswordError(false)}>
      入力したパスワードが一致しません
    </Alert>
  )
}
