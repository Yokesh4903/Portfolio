import React from 'react'
import "./Skill.scss"
import html from "./Icons/icons8-html-100.png"
import css from "./Icons/icons8-css-100.png"
import reactlogo from "./Icons/icons8-react-100.png"
import scss from "./Icons/icons8-document-100.png"
import redux from "./Icons/icons8-redux-100.png"
import bootstrap from "./Icons/icons8-bootstrap-100.png"
import javascript from "./Icons/icons8-javascript-100.png"
import python from "./Icons/icons8-python-100.png"
import flask from "./Icons/icons8-flask-100.png"
import vscode from "./Icons/icons8-vs-code-100.png"
import git from "./Icons/icons8-git-100.png"
import postman from "./Icons/icons8-postman-api-100.png"
import vercel from "./Icons/icons8-trine-120-100.png"
import ai from "./Icons/microchip.png"
import sql from "./Icons/files.png"
import mongo from "./Icons/database.png"
function Skill() {
  return (
    <div className='Skill-Body'>
      <div className='Skill-bar'>
                <div className='first'>
                  <h1 className='logo'>Y.B</h1>
                  <h1 className='name'>Yokesh</h1>
      
                  
                </div>
      
                <div className='pages'>
                  <a href='/' className='text'>HOME</a>
                  <a href='/about' className='text'>ABOUT</a>
                  <a href='/project' className='text'>PROJECT</a>
                  <a href='/skill' className='Skill'>SKILL</a>
                  <a href='/contact' className='text'>CONTACT</a>
                
                </div>
      
              </div>

              <div className='skill-title-flex'>
                <h1 className='skill-title-1'>My</h1>
                <h1 className='skill-title-2'>Skills</h1>

          </div>

              <div className='skill-first'>
                <div className='Frontend-Skill-Box'>

                  <h1 className='Frontend-skill'>Front-End Skills</h1>

                  <div className='Skill-flex-1'>
                       <div className='Skill-1'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={html} className='Skill-logo-1'/>
                              </div> 
                           <br/>
                           <h6 className='Skill-text-1'>HTML</h6>
                    
                          </div>
       
                       </div>

                  <div className='Skill-2'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={css} className='Skill-logo-2'/>
                              </div> 
                       <br/>
                           <h6 className='Skill-text-2'>CSS</h6>
                    
                          </div>
       
                  </div>

                  <div className='Skill-3'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={reactlogo} className='Skill-logo-3'/>
                              </div> 
                       <br/>
                           <h6 className='Skill-text-3'>REACT</h6>
                    
                          </div>
       
                  </div>
                       <div className='Skill-4'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={scss} className='Skill-logo-4'/>
                              </div> 
                       <br/>
                           <h6 className='Skill-text-4'>SCSS</h6>
                    
                          </div>
       
                  </div>

                  </div>

                  <div className='Skill-flex-2'>

                    

                    <div className='Skill-5'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={redux} className='Skill-logo-5'/>
                              </div> 
                       <br/>
                           <h6 className='Skill-text-5'>REDUX</h6>
                    
                          </div>
       
                  </div>
                      <div className='Skill-6'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={bootstrap} className='Skill-logo-6'/>
                              </div> 
                       <br/>
                           <h6 className='Skill-text-6'>BOOTSTRAP</h6>
                    
                          </div>
       
                  </div>

                  <div className='Skill-7'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={javascript} className='Skill-logo-7'/>
                              </div> 
                       <br/>
                           <h6 className='Skill-text-7'>JAVA SCRIPT</h6>
                    
                          </div>
       
                  </div>
                  </div>

                  

                </div>

                <div className='Back-end-box'>

                  <h1 className='Back-end-skill'>Back-End Skills</h1>

                  <div className='Back-Skill-flex-1'>
                       <div className='Back-Skill-1'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={python} className='Skill-logo-1'/>
                              </div> 
                           <br/>
                           <h6 className='Back-Skill-text-1'>PYTHON</h6>
                    
                          </div>
       
                       </div>

                       <div className='Back-Skill-2'>
                          <div>
                              <div className='Skill-logo'>
                                    <img src={flask} className='front-Skill-logo-2'/>
                              </div> 
                           <br/>
                           <h6 className='Back-Skill-text-2'>FLASK</h6>
                    
                          </div>
       
                       </div>

                       </div>

                </div>
              </div>

              <div className='tools-box'>
                  <h1 className='tools-name'>Tools</h1>
                  <div className='tools-flex'>

                    <div className='tool-1'>
                          <div>
                              <div className='tool-logo'>
                                    <img src={vscode} className='tool-logo-1'/>
                              </div> 
                           <br/>
                           <h6 className='tool-text-1'>VS CODE</h6>
                    
                          </div>
       
                       </div>

                       <div className='tool-2'>
                          <div>
                              <div className='tool-logo'>
                                    <img src={git} className='tool-logo-2'/>
                              </div> 
                           <br/>
                           <h6 className='tool-text-2'>GIT HUB</h6>
                    
                          </div>
       
                       </div>

                       <div className='tool-3'>
                          <div>
                              <div className='tool-logo'>
                                    <img src={postman} className='tool-logo-3'/>
                              </div> 
                           <br/>
                           <h6 className='tool-text-3'>POSTMAN API</h6>
                    
                          </div>
       
                       </div>
                      
                      <div className='tool-4'>
                          <div>
                              <div className='tool-logo'>
                                    <img src={vercel} className='tool-logo-4'/>
                              </div> 
                           <br/>
                           <h6 className='tool-text-4'>VERCEL</h6>
                    
                          </div>
       
                       </div>

                       <div className='tool-5'>
                          <div>
                              <div className='tool-logo'>
                                    <img src={ai} className='tool-logo-5'/>
                              </div> 
                           <br/>
                           <h6 className='tool-text-5'>AI INTEGRATION</h6>
                    
                          </div>
       
                       </div>

                       <div className='tool-6'>
                          <div>
                              <div className='tool-logo'>
                                    <img src={mongo} className='tool-logo-6'/>
                              </div> 
                           <br/>
                           <h6 className='tool-text-6'>MONGODB</h6>
                    
                          </div>
       
                       </div>

                       <div className='tool-7'>
                          <div>
                              <div className='tool-logo'>
                                    <img src={sql} className='tool-logo-7'/>
                              </div> 
                           <br/>
                           <h6 className='tool-text-7'>MySQL</h6>
                    
                          </div>
       
                       </div>

                  </div>
              </div>
    </div>
  )
}

export default Skill