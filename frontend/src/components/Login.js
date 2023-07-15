import * as React from 'react';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import LoginAlert from './atoms/LoginAlert';
import LoginOrganism from './organisms/LoginOrganism';


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
          <LoginAlert setLoginError={setLoginError} />:""
      }
      <LoginOrganism handleSubmit={handleSubmit} />
    </ThemeProvider>
  );
};