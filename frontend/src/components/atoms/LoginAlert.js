import React from 'react'
import Alert from '@mui/material/Alert';

export default function LoginAlert({setLoginError}) {
  return (
    <Alert severity="warning" onClose={() => setLoginError(false)}>
      ユーザ名もしくはパスワードが間違っています
    </Alert>
  )
}
