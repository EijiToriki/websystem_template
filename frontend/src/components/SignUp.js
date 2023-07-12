import * as React from 'react';
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp({setIsAuth, setUserId}) {
  const navigate = useNavigate()
  const [signUpError, setSignUpError] = React.useState(false)

  const handleSubmit = (event) => {
    const baseURL = "http://127.0.0.1:5000/signup"
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postData = {
      'name': data.get('username'),
      'password': data.get('password')
    }
    async function postUser(){
      try{
        const res = await axios.post(baseURL, postData)
        const id = res.data.result
        console.log(id)
        if(id >= 1){
          localStorage.setItem('isAuth', true)
          setIsAuth(true)
          localStorage.setItem('userId', id)
          setUserId(id)
          navigate('/main1')
        }
      }catch(error){
        setSignUpError(true)
      } 
    }
    postUser()
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {
        signUpError ?
        <Alert severity="warning" onClose={() => setSignUpError(false)}>入力したユーザ名が既に使われています</Alert>:""
      }
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            アカウント 登録
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="ユーザ名"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="パスワード"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              アカウント 登録
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  既にアカウントがある場合は、こちらからログイン
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}