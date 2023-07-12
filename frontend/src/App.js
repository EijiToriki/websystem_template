import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import HeadSidebar from './components/HeadSidebar';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Main3 from './components/Main3';
import Sub1 from './components/Sub1';
import Sub2 from './components/Sub2';
import Login from './components/Login';
import SignUp from './components/SignUp';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        toriki
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

function App() {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth"))
  const [userId, setUserId] = React.useState(localStorage.getItem("userId"))

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <HeadSidebar isAuth={isAuth} setIsAuth={setIsAuth} />

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

              {/* ここにルーティングを設定する */}
              <Routes>
                <Route exact path="/login" element={<Login setIsAuth={setIsAuth} setUserId={setUserId} />} />
                <Route exact path="/signup" element={<SignUp setIsAuth={setIsAuth} setUserId={setUserId} />} />
                <Route exact path="/main1" element={<Main1 isAuth={isAuth} userId={userId} />} />
                <Route exact path="/main2" element={<Main2 isAuth={isAuth} userId={userId} />} />
                <Route exact path="/main3" element={<Main3 isAuth={isAuth} userId={userId} />} />
                <Route exact path="/sub1" element={<Sub1 isAuth={isAuth} userId={userId} />} />
                <Route exact path="/sub2" element={<Sub2 isAuth={isAuth} userId={userId} />} />
              </Routes>
              {/* -------------------------- */}
            </Container>
            <Copyright sx={{ pt: 4 }} />

          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;