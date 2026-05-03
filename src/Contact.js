import React from 'react'
import "./Contact.scss"
import mail from "./Images/icons8-mail-100.png"
import location from "./Images/icons8-address-100.png"
import phone from "./Images/icons8-phone-100.png"
import likedin from "./Images/icons8-linkedin-100.png"
import git from "./Icons/icons8-git-100.png"

function Contact() {
  return (
    <div className='Contact-Body'>
      <div className='Contact-bar'>
          <div className='first'>
            <h1 className='logo'>Y.B</h1>
            <h1 className='name'>Yokesh</h1>

            
          </div>

          <div className='pages'>
            <a href='/' className='text'>HOME</a>
            <a href='/about' className='text'>ABOUT</a>
            <a href='/project' className='text'>PROJECT</a>
            <a href='/skill' className='text'>SKILL</a>
            <a href='/contact' className='Contact'>CONTACT</a>
          
          </div>

        </div>

        <div className='Contact-title-flex'>
                <h1 className='Contact-title-1'>Get in</h1>
                <h1 className='Contact-title-2'>Touch</h1>

          </div>

          <h4 className='Contact-line-1'>Have a project in mind or just want to chat? I'd love to hear from you.</h4>

          <div className='Contact-box'>
                        
              <div className='Contact-logo'>
                     <img src={mail} className='Contact-logo-1'/>
              </div> 
              <br/>
                   <h6 className='mail-text-1'>Mail</h6>
                  <h6 className='mail-text-2'>yokesh492003@gmail.com</h6>

          </div>
          <div className='Contact-box'>
                        
              <div className='Contact-logo'>
                     <img src={location} className='Contact-logo-1'/>
              </div> 
              <br/>
                   <h6 className='mail-text-3'>Location</h6>
                  <h6 className='mail-text-4'>Chennai</h6>

          </div>

          <div className='Contact-box'>
                        
              <div className='Contact-logo'>
                     <img src={phone} className='Contact-logo-1'/>
              </div> 
              <br/>
                   <h6 className='mail-text-5'>Phone</h6>
                  <h6 className='mail-text-6'>+91 6381401901</h6>

          </div>

          <div className='Contact-box'>

            <h6 className='mail-text-7'>Other Contacts</h6>
                        
              <div className='Contact-flex'>
               
               <a href='https://www.linkedin.com/in/yokesh-b-401b41283/'>
                 <div className='Contact-logo-2'>
                     <img src={likedin} className='Contact-logo-2-2'/>
              </div> 
               </a>
                
             <a href='https://github.com/Yokesh4903'>
               <div className='Contact-logo-3'>
                     <img src={git} className='Contact-logo-3-3'/>
              </div> 
             </a>
              

              </div>
          
                  

          </div>
          <div className='Contact-box-last'>
                <h6 className='mail-text-8'>Let's work together</h6>
                   <h6 className='mail-text-9 '>I'm always open to discussing new projects, creative ideas, or opportunities</h6>
                  <h6 className='mail-text-10'>to be part of your vision.</h6>
 
          </div>
                       

          
    </div>
  )
}

export default Contact