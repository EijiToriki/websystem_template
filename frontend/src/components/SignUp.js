import * as React from 'react';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SignUpOrganism from './organisms/SignUpOrganism';
import SignUpErrorCheck from './molecules/SignUpErrorCheck';

const defaultTheme = createTheme();

export default function SignUp({setIsAuth, setUserId, setUserInfo}) {
  const navigate = useNavigate()
  const [emptyError, setEmptyError] = React.useState(false)
  const [mailError, setMailError] = React.useState(false)
  const [passwordError, setPasswordError] = React.useState(false)
  const [passwordFormError, setPasswordFormError] = React.useState(false)
  const [signUpError, setSignUpError] = React.useState(false)

  const handleSubmit = (event) => {
    const baseURL = "http://localhost:5000/signup"
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postData = {
      'name': data.get('username'),
      'email': data.get('email'),
      'password': data.get('password'),
      'confirm': data.get('passwordConfirm')
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
          setEmptyError(false)
          setMailError(false)
          setPasswordError(false)
          setPasswordFormError(false)
          setSignUpError(false)
          if(id === -1){
            setEmptyError(true)
          }else if(id === -2){
            setMailError(true)
          }else if(id === -3){
            setPasswordError(true)
          }else if(id === -4){
            setPasswordFormError(true)
          }else if(id === -5){
            setSignUpError(true)
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
      <SignUpErrorCheck 
        emptyError={emptyError} setEmptyError={setEmptyError}
        mailError={mailError} setMailError={setMailError}
        passwordError={passwordError} setPasswordError={setPasswordError}
        passwordFormError={passwordFormError} setPasswordFormError={setPasswordFormError}
        signUpError={signUpError} setSignUpError={setSignUpError}
      />
      <SignUpOrganism handleSubmit={handleSubmit} />
    </ThemeProvider>
  );
}