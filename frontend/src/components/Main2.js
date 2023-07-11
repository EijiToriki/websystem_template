import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Main2({isAuth, userId}) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if(!isAuth){
      navigate('/login')
    }
  },[])
  return (
    <div>Main2:Id{userId}がログイン中</div>
  )
}
