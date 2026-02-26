import React, { useState } from 'react'
import '../Components/NavBar.css'
import { useProjects } from '../Context/Projectscontext';

const Home = () => {
  const [dark, setDark] = useState(false);
  const { projects } = useProjects();

  const isDark = () => {
    setDark(prev => !prev)
  };

  return (
    <>
    {/* MAIN */}
      <main className={dark? "dark": "main"}>
        {/* TOP BAR */}
        <header className="topbar">
          <input
            type="text"
            placeholder="Search projects, tasks..."
            className="topbar-input"
          />
          <div className="top-icons">
            <span onClick={isDark} className='theme'>{dark ? "☀️" : "🌙"}</span>
            <span>🔔</span>
            <img src="https://i.pravatar.cc/36" alt="avatar" />
          </div>
        </header>

        {/* CONTENT */}
        <section className="content">
          <h1>Dashboard Overview</h1>
          <p className="subtitle">
            Welcome back! Here's what's happening with your projects today.
          </p>

          <div className="stats">
            <div className="card">
              <p>Total Projects</p>
              <div className='card-flex'>
                <h2>{projects.length}</h2>
                <span className="up">+12%</span>
              </div>
            </div>
            <div className="card">
              <p>Active Tasks</p>
              <div className='card-flex'>
                <h2>8</h2>
                <span className="up">+5%</span>
              </div>
            </div>
            <div className="card">
              <p>Completed</p>
              <div className='card-flex'>
                <h2>2</h2>
                <span className="up">+18%</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="box large">Task Progress This Week</div>
            <div className="box large">Productivity Stats</div>

            <div className="box">Tasks by Status</div>
            <div className="box">
              <h3>Active Projects</h3>

              <div className="progress">
                <p>Website Redesign <span>75%</span></p>
                <div className="bar">
                  <span style={{ width: "75%" }} />
                </div>
              </div>

              <div className="progress">
                <p>Mobile App <span>45%</span></p>
                <div className="bar">
                  <span style={{ width: "45%" }} />
                </div>
              </div>
            </div>

            <div className="box">Recent Activity</div>
          </div>
        </section>
      </main>
    </>
  );
};


export default Home
