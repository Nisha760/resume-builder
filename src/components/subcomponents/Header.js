import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/Header.module.css';

function Header() {
  return (
    <>
      <div className='logo'>
        logo
      </div>
      <div className={styles.content}>
        <div>Resume Template</div>
        <div>About Us</div>
        <div>
          <Link to='/signup'>
            Register
          </Link>
        </div>
        <div>
          <Link to='/login'>
            Login
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header