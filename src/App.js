import React from 'react'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from "./Homepage"
import About from "./About"
import Project from "./Project"
import Skill from './Skill'
import contact from "./Contact"
import Contact from './Contact'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </Router>
    </div>
  )
}

export default App