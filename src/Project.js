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
                           <a href='https://github.com/Yokesh4903/OneRec-Final.git' className='text-deco'>
                            <h6 className='project-text-1'>HTML Project - OneRec Design</h6>
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


                       <div className='project-2'>
                          <div>
                              <div className='project-logo'>
                                   
                              </div> 
                           <br/>
                           <a href='https://github.com/Yokesh4903/Startup-Generator-frontend-final' className='text-deco'>
                            <h6 className='project-text-1'>AI Startup Generator - Frontend</h6>
                           <h6 className='project-text-2'>Developed a React.js-based user interface with authentication and an AI-powered dashboard.</h6>
                    

                           </a>
                           
                          </div>
                             <div className='tool-tag-flex'>
                          <h6 className='project-tag-1'>React</h6>
                          <h6 className='project-tag-2'>CSS</h6>
                          <h6 className='project-tag-3'>JavaScript</h6>
                          <h6 className='project-tag-4'>Axios</h6>

                       </div>
                       </div>

                       <div className='project-3'>
                          <div>
                              <div className='project-logo'>
                                   
                              </div> 
                           <br/>
                           <a href='https://github.com/Yokesh4903/Startup-Generator-Backend.git' className='text-deco'>
                            <h6 className='project-text-1'>AI Startup Generator - Backend</h6>
                           <h6 className='project-text-3'>Built a Flask backend with MongoDB Atlas, JWT authentication, and OpenAI API integration.</h6>
                    

                           </a>
                           
                          </div>
                             <div className='tool-tag-flex'>
                          <h6 className='project-tag-5'>Python</h6>
                          <h6 className='project-tag-6'>Flask</h6>
                          <h6 className='project-tag-7'>MongoDB</h6>
                          <h6 className='project-tag-8'>OpenAI</h6>

                       </div>
                       </div>
                       
          
        </div>
        </div>
  )
}

export default Project