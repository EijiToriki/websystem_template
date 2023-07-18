import React from 'react'
import Alert from '@mui/material/Alert';

export default function MailAlert({setMailError}) {
  return (
    <Alert severity="warning" onClose={() => setMailError(false)}>
      メールアドレスの形式で入力してください
    </Alert>
  )
}

