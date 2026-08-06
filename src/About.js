import React from 'react'
import "./About.scss"
import clean from "./Images/icons8-source-code-100.png"
import design from "./Images/icons8-paint-palette-100.png"
import idea from "./Images/icons8-idea-100.png"
import world from "./Images/icons8-world-100.png"

export default function () {
  return (
    <div className='About-Body'>
        <div className='About-bar'>
          <div className='first'>
            <h1 className='logo'>Y.B</h1>
            <h1 className='name'>Yokesh</h1>

            
          </div>

          <div className='pages'>
            <a href='/' className='About-text'>HOME</a>
            <a href='/about' className='About'>ABOUT</a>
            <a href='/project' className='About-text'>PROJECT</a>
            <a href='/skill' className='About-text'>SKILL</a>
            <a href='/contact' className='About-text'>CONTACT</a>
          
          </div>

        </div> 

        <div className='About-line-1'>
          <h1 className='line-1-text-1'>About</h1>
          <h1 className='line-1-text-2'>Me</h1>
        </div>
        <h2 className='About-line-2'>A passionate developer eager to create impactful digital experiences</h2>

        <div className='About-lines'>
          <div className='About-left'>
            <div>
                <h4 className='About-line-3'>I'm a graduate and aspiring full-stack developer with a strong foundation in modern web technologies. My journey in tech started with curiosity about how things work, and has evolved into a passion for creating beautiful, functional digital products.</h4>
            </div>
            <div className='About-line-4'>
               <span className='About-line-4-text-1'>I specialize in</span><span className='About-line-4-text-2'>JavaScript, React</span><span className='About-line-4-text-3'> and</span><span className='About-line-4-text-2'>Python</span><span className='About-line-4-text-4'>with experience in building </span> <br/> <span className='About-line-4-text-5'>responsive frontends with Redux and SCSS.</span>
            </div>
            <div>
              <h4 className='About-line-5'>I'm eager to contribute to meaningful projects, learn from experienced developers, and grow as a professional. I believe in writing clean code, continuous learning, and pushing the boundaries of what's possible.</h4>
            </div>
          </div>

          <div className='About-right'>
            <div className='About-rightline-1'>
              <h1 className='About-righttext-1'>2+</h1>
              <h4 className='About-righttext-2'>Projects</h4>
            </div>
            <div className='About-rightline-2'>
              <h1 className='About-righttext-1'>8+</h1>
              <h4 className='About-righttext-3'>Technologies</h4>
            </div>
            <div className='About-rightline-3'>
              <h1 className='About-righttext-1'>∞</h1>
              <h4 className='About-righttext-4'>Passion to Learn</h4>
            </div>

          </div>

        </div>

        <div className='About-lastlines'>
          <div className='About-lastline-1'>
            <div>
              <div className='About-logo'>
                    <img src={clean} className='About-logo-1' alt='Clean Code Logo'/>
                </div> 
                <br/>
                <h6 className='About-lastline-box-1-text-1'>Clean Code</h6>
                <h6 className='About-lastline-box-1-text-2'>Writing maintainable, scalable,</h6>
                <h6 className='About-lastline-box-1-text-3'>and well-documented code</h6>
            </div>
            
                
          </div>

          <div className='About-lastline-1'>
            <div>
              <div className='About-logo'>
                    <img src={design} className='About-logo-1' alt='Design Focus Logo'/>
                </div> 
                <br/>
                <h6 className='About-lastline-box-2-text-1'>Design Focus</h6>
                <h6 className='About-lastline-box-2-text-2'>Creating visually stunning and</h6>
                <h6 className='About-lastline-box-2-text-3'>user-friendly interfaces</h6>
            </div>
            
                
          </div>

          <div className='About-lastline-1'>
            <div>
              <div className='About-logo'>
                    <img src={idea} className='About-logo-1' alt='Quick Learner Logo'/>
                </div> 
                <br/>
                <h6 className='About-lastline-box-3-text-1'>Quick Learner</h6>
                <h6 className='About-lastline-box-3-text-2'>Adapting to new technologies</h6>
                <h6 className='About-lastline-box-3-text-3'>and frameworks rapidly</h6>
            </div>
            
                
          </div>


          <div className='About-lastline-1'>
            <div>
              <div className='About-logo'>
                    <img src={world} className='About-logo-1' alt='Full Stack Logo'/>
                </div> 
                <br/>
                <h6 className='About-lastline-box-4-text-1'>Full Stack</h6>
                <h6 className='About-lastline-box-4-text-2'>Building complete solutions from</h6>
                <h6 className='About-lastline-box-4-text-3'>frontend to backend</h6>
            </div>
            
                
          </div>
        </div>
       
         
    </div>
  )
}
