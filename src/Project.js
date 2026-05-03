import React from 'react'
import "./Project.scss"
import git from "./Icons/icons8-git-100.png"

function Project() {
  return (
    <div className='Project-Body'>
      <div className='Project-bar'>
          <div className='first'>
            <h1 className='logo'>Y.B</h1>
            <h1 className='name'>Yokesh</h1>

            
          </div>

          <div className='pages'>
            <a href='/' className='text'>HOME</a>
            <a href='/about' className='text'>ABOUT</a>
            <a href='/project' className='Project'>PROJECT</a>
            <a href='/skill' className='text'>SKILL</a>
            <a href='/contact' className='text'>CONTACT</a>
          
          </div>

        </div>
          <div className='project-title-flex'>
                <h1 className='project-title-1'>My</h1>
                <h1 className='project-title-2'>Projects</h1>

          </div>
        
        <div className='project-box'>
          
          <div className='project-1'>
                          <div>
                              <div className='project-logo'>
                                   
                              </div> 
                           <br/>
                           <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1' className='text-deco'>
                            <h6 className='project-text-1'>HTML Project</h6>
                           <h6 className='project-text-2'>Built a front-end authentication system with signup, signin, validation, and a responsive dashboard using HTML, CSS, and JavaScript.</h6>
                    

                           </a>
                           
                          </div>
                             <div className='tool-tag-flex'>
                          <h6 className='project-tag-1'>HTML</h6>
                          <h6 className='project-tag-2'>CSS</h6>
                          <h6 className='project-tag-3'>JavaScript</h6>
                          <h6 className='project-tag-3'>validation</h6>

                       </div>
                       </div>
                       
          
        </div>
        </div>
  )
}

export default Project