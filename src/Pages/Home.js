import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/Home.module.css'
import { RiArrowRightSLine } from 'react-icons/ri' ;
import FormCotainer from '../components/FormCotainer';
import Select from '../components/subcomponents/Select';

const veryLightGrey = '#dbdada';
const lightGrey = '#cbcaca';
const mediumGrey = '#9d9b9b';
const darkGrey = '#6a6969';

function Home() {

  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? 'black' : darkGrey,
      fontWeight: isActive ? 700 : 400,
      fontSize: isActive ? "16px" : "14px"
    }
  }
  const arrowStyle = {
    fontSize: "25px",
    color: darkGrey,
    fontWeight: 600
  }
  return (
    <div>

      <nav className={styles.navBar}>

        <div>
          <NavLink to='contact-info' style={navStyle}>Contact Info</NavLink>
        </div>
        <RiArrowRightSLine style={arrowStyle} />
        <div>
          <NavLink to='work-experience' style={navStyle}>Work Experience</NavLink>
        </div>
        <RiArrowRightSLine style={arrowStyle} />
        <div>
          <NavLink to='education' style={navStyle}>Education</NavLink>
        </div>
        <RiArrowRightSLine style={arrowStyle} />
        <div>
          <NavLink to='skills' style={navStyle}>Skills</NavLink>
        </div>
        <RiArrowRightSLine style={arrowStyle} />
        <div>
          <NavLink to='summary' style={navStyle}>Summary</NavLink>
        </div>

      </nav>

      <div className={styles.content}>
        <Outlet />
      </div>


    </div>
  )
}

export default Home