import React from 'react'
import "./Homepage.scss"

function Homepage() {
  return (
    <div className='Home-Body'>
      <div className='Home-bar'>
          <div className='first'>
            <h1 className='logo'>Y.B</h1>
            <h1 className='name'>Yokesh</h1>

            
          </div>

          <div className='pages'>
            <a href='/' className='Home'>HOME</a>
            <a href='/about' className='text'>ABOUT</a>
            <a href='/project' className='text'>PROJECT</a>
            <a href='/skill' className='text'>SKILL</a>
            <a href='/contact' className='text'>CONTACT</a>
          
          </div>

        </div> 
      
      <div className='Home-line-1'>
        <h6 className='dot'></h6> 
        <h6 className='open'>Open to Oppurtunities</h6>
      </div>

      <div className=' Home-name'>
        <h1 className='Home-text-1'>Hi, I'm</h1>
        <h1 className='Home-text-2'>Yokesh</h1>
        <div className='Home-name-content'>
          <h2 className='Home-content-1'>Full-Stack Developer passionate about </h2>
          <h2 className='Home-content-3'>React, HTML</h2>
        </div>
        <h2 className='Home-content-2'>& Python</h2>
      </div>

      <div className='Home-buttons'>
           <a href='/project'>
             <button className='btn-1'>Explore My Works</button>
           </a>
           <a href='/contact'>
             <button className='btn-2'>Contact Me</button>
           </a>
           
      </div> 

    </div>
  )
}

export default Homepage