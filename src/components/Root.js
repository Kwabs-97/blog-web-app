import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Root
