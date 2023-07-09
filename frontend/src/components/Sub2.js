import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Sub2({isAuth}) {
  const navigate = useNavigate()
  React.useEffect(() => {
    if(!isAuth){
      navigate('/login')
    }
  },[])
  return (
    <div>Sub2</div>
  )
}
