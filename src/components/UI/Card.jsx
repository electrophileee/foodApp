import React from 'react'

function Card(props) {
  return (
    <div className='p-4 rounded-xl bg-white shadow-sm shadow-gray-50 '>{props.children}</div>
  )
}

export default Card