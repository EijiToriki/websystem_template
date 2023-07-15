import * as React from 'react';
import axios from 'axios'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import SignUpAlert from './atoms/SignUpAlert';
import SignUpOrganism from './organisms/SignUpOrganism';

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
        }else{
          setSignUpError(true)
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
        <SignUpAlert setSignUpError={setSignUpError} /> : ""
      }
      <SignUpOrganism handleSubmit={handleSubmit} />
    </ThemeProvider>
  );
}