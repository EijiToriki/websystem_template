import React from 'react'
import Alert from '@mui/material/Alert';

export default function EmptyAlert({setEmptyError}) {
  return (
    <Alert severity="warning" onClose={() => setEmptyError(false)}>
      未入力の入力項目があります
    </Alert>
  )
}