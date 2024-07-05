import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
  
    if(!user){
        return <>Please Login</>
    }
  else{
   return (
    <div className="">

   <div className="">
    User Name: {user.username}
    </div>
    <div className="">
    Password: {user.password}
   </div>
   </div>
)
  }
}

export default Profile
