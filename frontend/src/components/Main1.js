import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Main1({isAuth, userInfo}) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if(!isAuth){
      navigate('/login')
    }
  },[])

  return (
    <div>Main1:{userInfo['name']}({userInfo['email']})がログイン中</div>
  )
}
