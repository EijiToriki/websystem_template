import * as React from 'react';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SignUpAlert from './atoms/SignUpAlert';
import SignUpOrganism from './organisms/SignUpOrganism';
import PasswordAlert from './atoms/PasswordAlert';

const defaultTheme = createTheme();

export default function SignUp({setIsAuth, setUserId}) {
  const navigate = useNavigate()
  const [signUpError, setSignUpError] = React.useState(false)
  const [passwordError, setPasswordError] = React.useState(false)

  const handleSubmit = (event) => {
    const baseURL = "http://127.0.0.1:5000/signup"
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postData = {
      'name': data.get('username'),
      'password': data.get('password'),
      'confirm': data.get('passwordConfirm')
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
        }else{
          if(id == -1){
            setSignUpError(true)
          }else if(id == -2){
            setPasswordError(true)
          }
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
        signUpError ?
          <SignUpAlert setSignUpError={setSignUpError} /> 
        : passwordError ?
          <PasswordAlert setPasswordError={setPasswordError} />
        :
          ""
      }
      <SignUpOrganism handleSubmit={handleSubmit} />
    </ThemeProvider>
  );
}