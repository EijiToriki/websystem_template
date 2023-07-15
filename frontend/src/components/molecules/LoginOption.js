import React from 'react'
import Grid from '@mui/material/Grid';
import ForgetPasswordLink from '../atoms/ForgetPasswordLink'
import SignUpLink from '../atoms/SignUpLink'

export default function LoginOption() {
  return (
    <Grid container>
      <Grid item xs>
        <ForgetPasswordLink />
      </Grid>
      <Grid item>
        <SignUpLink />
      </Grid>
    </Grid>
  )
}
