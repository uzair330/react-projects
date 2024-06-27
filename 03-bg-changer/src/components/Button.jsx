import React from 'react'

const Button = ({name,btnFunc,textcolor}) => {
  return (
    <div>
      <button
     onClick={btnFunc}
    className={`border border-spacing-1 m-2 p-2 rounded-lg ${textcolor}`}
   

      >
{name}
      </button>
    </div>
  )
}

export default Button
