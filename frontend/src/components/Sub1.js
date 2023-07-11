import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Sub1({isAuth, userId}) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if(!isAuth){
      navigate('/login')
    }
  },[])
  return (
    <div>Sub1:Id{userId}がログイン中</div>
  )
}
