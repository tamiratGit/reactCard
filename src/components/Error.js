import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <>
    <h1 className="text-center">404 page</h1>
    <Link to="/"><button className='btn btn-danger'>Home</button></Link>
    </>
  )
}

export default Error