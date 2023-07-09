import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Main1({isAuth}) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if(!isAuth){
      navigate('/login')
    }
  },[])

  return (
    <div>Main1</div>
  )
}
