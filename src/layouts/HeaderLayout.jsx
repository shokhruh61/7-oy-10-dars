import React from 'react'
import { Link } from 'react-router-dom'

function HeaderLayout ({ children }) {
  return (
    <div className='w-[900px] mx-auto'>
      <div className='flex items-center justify-between  mb-28  bg-blue-700 p-3'>
        <Link className='text-white bg-gray-600 px-3 py-2 rounded-md' to='/'>
          Home
        </Link>
        <Link
          className='text-white bg-gray-600 px-3 py-2 rounded-md'
          to='/Formik'
        >
          Form
        </Link>
        <Link
          className='text-white bg-gray-600 px-3 py-2 rounded-md'
          to='/json'
        >
          json
        </Link>
        <Link
          className='text-white bg-gray-600 px-3 py-2 rounded-md'
          to='/chart'
        >
          chart
        </Link>
      </div>

      {children}
    </div>
  )
}

export default HeaderLayout
