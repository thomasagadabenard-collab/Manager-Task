import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './components/NavBar'
import Projects from './Pages/Projects'
import Settings from './Pages/Settings'
import Tasks from './Pages/Tasks'
import Team from './Pages/Team'
import './index.css'
import Calender from './Pages/Calender'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      
      <BrowserRouter>
        <div className='flex'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path = '/Calender' element = {<Calender />}/>
            <Route path='/Projects' element = {<Projects />} />
            <Route path = '/Settings' element = {<Settings />}/>
            <Route path='/Tasks' element = {<Tasks />}/>
            <Route path='/Team' element = {<Team />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )

}

export default App
