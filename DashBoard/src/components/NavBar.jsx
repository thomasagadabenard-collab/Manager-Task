import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <aside className="side-bar">
        <div className="task-flow">
          <div className="logo-grid">
            <span className="grid-one"></span>
            <span></span>
            <span className="grid-three"></span>
            <span></span>
          </div>
          <div className="logo">TaskFlow</div>
        </div>

        <nav className="menu">
          <Link to="/" className='menu-child active' > Dashboard </Link>
          <Link to="/projects" className='menu-child'>Projects</Link>
          <Link to="/tasks" className='menu-child'>Tasks</Link>
          <Link to = "/Calender" className='menu-child'>Calender</Link>
          <Link to="/team" className='menu-child'>Team</Link>
          <Link to="/settings" className='menu-child'>Settings</Link>
        </nav>

        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="user" />
          <div>
            <p className="name">Thomas Benard</p>
            <span>Product Manager</span>
          </div>
        </div>
      </aside>
    </>
  )
}

export default NavBar
