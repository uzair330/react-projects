import React from 'react'
import {useParams} from 'react-router-dom'
const User = () => {
    const {userid} = useParams()
  return (
    <div className='flex justify-center w-full bg-slate-600 text-white p-2 mt-3'>
      <span className='p-2 font-semibold '>
      User:

      {userid}
      </span>
    </div>
  )
}

export default User
