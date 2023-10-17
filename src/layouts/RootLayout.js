import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumbs'

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
          <nav>
            <h1>Jobberman</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <NavLink to='help'>Help</NavLink>
            <NavLink to='careers'>Career</NavLink>
          </nav>
          <Breadcrumb/>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}
        