import React,{useRef} from 'react'
import "./header.css"
import { Container } from 'reactstrap'

const Header = () => {

    const menuRef = useRef()

    const menuToggle = ()=>menuRef.current.classList.toggle("activeMenu")

  return (
    <div>
      <header className='header'>
        <Container>
            <div className='navigation d-flex align-items-center justify-content-between'>
                <div className='logo'>
                    <h2 className='d-flex align-items-center'><i class="ri-pantone-line"></i>Learners..</h2>
                </div>
                <div className="nav d-flex align-items-center gap-5">
                    <div className="navMenu" ref={menuRef} onClick={menuToggle}>
                        <ul className="navList">
                            <li className="navItem">
                                <a href="#home">Home</a> 
                            </li>
                            <li className="navItem">
                                <a href="#about">About</a>
                            </li>
                            <li className="navItem">
                                <a href="#courses">Courses</a>
                            </li>
                            <li className="navItem">
                                <a href="#blog">Blog</a> 
                            </li>
                        </ul>
                    </div>

                    <div className="navRight">
                        <p className='mb-0 d-flex align-items-center gap-2'>
                        <i class="ri-phone-line"></i>+91-0123456789
                        </p>
                    </div>
                </div>

                <div className="mobileMenu">
                    <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
                </div>
            </div>
        </Container>
      </header>
    </div>
  )
}

export default Header
