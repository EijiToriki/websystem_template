import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Main1({isAuth, userId}) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if(!isAuth){
      navigate('/login')
    }
  },[])

  return (
    <div>Main1:Id{userId}がログイン中</div>
  )
}
