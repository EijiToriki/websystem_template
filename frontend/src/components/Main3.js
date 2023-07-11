import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Main3({isAuth, userId}) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if(!isAuth){
      navigate('/login')
    }
  },[])
  return (
    <div>Main3:Id{userId}がログイン中</div>
  )
}
