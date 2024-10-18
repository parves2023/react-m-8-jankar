import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>        OOpss this is error</h1>
        <Link className='btn' to="/">Go back to Home</Link>
    </div>
  )
}

export default ErrorPage