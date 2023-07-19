import React from 'react'
import Alert from '@mui/material/Alert';

export default function PasswordFormAlert({setPasswordFormError}) {
  return (
    <Alert severity="warning" onClose={() => setPasswordFormError(false)}>
      パスワードは英数字混合の8文字以上で設定してください
    </Alert>
  )
}
