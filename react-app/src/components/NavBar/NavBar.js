
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import QuestionFormModal from '../QuestionFormModal';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div className='nav-div'>
        <ul>
          {/* <li>
            <NavLink to='/' exact={true} activeClassName='active'>
            QueWhat
            </NavLink>
          </li> */}
          <li className='nav-icon'>
            <NavLink to='/' exact={true} activeClassName='active'>
            <ion-icon name="home-outline"></ion-icon>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' exact={true} activeClassName='active'>
              About
            </NavLink>
          </li>
          <li className='nav-icon'>
            <a href='https://github.com/akim38/solo-capstone-project' className="about__link" target="_blank" rel="noreferrer">
            <ion-icon className='icon' name="logo-github"></ion-icon>
            </a>
          </li>
          <li className='nav-icon'>
            <a href='https://www.linkedin.com/in/aletheia-kim-47086922a/' className="about__link" target="_blank" rel="noreferrer">
            <ion-icon className='icon' name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
