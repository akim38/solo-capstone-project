
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import QuestionFormModal from '../QuestionFormModal';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div className='nav-div'>
          <div className='title'>
            <div>
              <NavLink to='/' exact={true} activeClassName='active'>
              <p>QueWhat</p>
              </NavLink>
            </div>
            <div className='nav-icon'>
              <NavLink to='/' exact={true} activeClassName='active'>
              <i class="fa-solid fa-house"></i>
              Home
              </NavLink>
            </div>

          </div>
          <div className='nav-icon'>
            <a href='https://github.com/akim38/solo-capstone-project' className="about__link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div className='nav-icon'>
            <a href='https://www.linkedin.com/in/aletheia-kim-47086922a/' className="about__link" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className='nav-icon'>
            <NavLink to='/about' exact={true} activeClassName='active'>
              About
            </NavLink>
          </div>
          <div>
            <LogoutButton />
          </div>
      </div>
    </nav>
  );
}

export default NavBar;
