import React from 'react'
import Button from '@mui/material/Button';

export default function SignUpButton() {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
    >
      新規登録
    </Button>  
  )
}
