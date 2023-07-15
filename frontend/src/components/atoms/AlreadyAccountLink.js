import React from 'react'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

export default function AlreadyAccountLink() {
  return (
    <Grid container>
      <Grid item>
        <Link href="/login" variant="body2">
          既にアカウントをお持ちの方
        </Link>
      </Grid>
    </Grid>
  )
}
