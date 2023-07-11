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

export default function Login({setIsAuth, setUserId}) {
  const navigate = useNavigate()
  const [loginError, setLoginError] = React.useState(false)

  const handleSubmit = (event) => {
    const baseURL = "http://127.0.0.1:5000/login"
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
        if(id >= 1){
          localStorage.setItem('isAuth', true)
          setIsAuth(true)
          localStorage.setItem('userId', id)
          setUserId(id)
          navigate('/main1')
        }else{
          setLoginError(true)
        }
      }catch(error){
        console.log(error)
      } 
    }
    postUser()
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {
        loginError ?
        <Alert severity="warning" onClose={() => setLoginError(false)}>ユーザ名もしくはパスワードが間違っています</Alert>:""
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
            ログイン
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="ユーザ名"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="パスワード"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ログイン
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  パスワードをお忘れですか？
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  新規アカウント作成
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};