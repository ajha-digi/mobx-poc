import React from 'react'
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <div>
        <h2>PublicLayout</h2>
        <Outlet />
    </div>
  )
}

export default PublicLayout