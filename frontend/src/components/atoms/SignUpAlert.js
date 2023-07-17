import React from 'react'
import Alert from '@mui/material/Alert';

export default function SignUpAlert({setSignUpError}) {
  return (
    <Alert severity="warning" onClose={() => setSignUpError(false)}>
      入力したメールアドレスが既に使われています
    </Alert>
  )
}
