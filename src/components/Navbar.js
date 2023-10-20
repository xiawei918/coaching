import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react'

// styles
import OutsideClick from './OutsideClick';
import { useRef } from 'react';
import styles from './Navbar.module.css'

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const boxRef = useRef(null);
    // const boxOutsideClick = OutsideClick(boxRef, setShowNavbar);

    const isLinkActive = ({isActive}) => {
        let cls = 'inactive';
        if (isActive) {
            cls = styles['active'];
        }
        return cls;
    }

    return (
        <nav className={styles.navbar}>
          <div className={styles.container}>
            <div className={styles.logo}>
                <NavLink to="/"><h2>Lorem Ipsum</h2></NavLink>
            </div>
            <div className={styles['menu-icon']}>
                <Hamburger toggled={showNavbar} toggle={setShowNavbar} />
            </div>
            <div className={`${styles['nav-elements']} ${showNavbar && styles['active']}`} ref={boxRef}>
              <ul>
                <li>
                  <NavLink to="/" className={isLinkActive} onClick={()=>{setShowNavbar(false)}}>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className={({ isActive }) => (isActive ? styles['active'] : 'inactive')} onClick={()=>{setShowNavbar(false)}}>About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" className={({ isActive }) => (isActive ? styles['active'] : 'inactive')} onClick={()=>{setShowNavbar(false)}}>Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )
}