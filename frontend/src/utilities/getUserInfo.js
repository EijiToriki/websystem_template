import axios from "axios"

export default async function getUserInfo(userId){
  const baseURL = "http://127.0.0.1:5000/getuser"
  let userInfo
  try{
    const res = await axios.post(baseURL, {
      "id": userId
    })
    userInfo = res.data
    console.log(userInfo)
  }catch(error){
    console.log(error)
  }
  return userInfo
}