import React from 'react'
import { Outlet } from 'react-router-dom'

function PrivateLayout() {
  return (
    <div>
        <h2>PrivateLayout</h2>
        <Outlet />
    </div>
  )
}

export default PrivateLayout