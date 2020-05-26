import React from 'react';
import '../assets/styles/Header.scss';

const Header = () => (
  <header className='header'>
    <div className='header__wrapper'>
      <div className='title'>
        <h1>Social Media Dashboard</h1>
        <p>
          Total Followers:
          <span>23,000</span>
        </p>
      </div>
      <div className='dark-mode'>
        <p>Dark Mode</p>
        <div className='switch' id='inputSwitch'>
          <div className='switch-option'>
            {/* <input type='checkbox' name='switch' checked='false' /> */}
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
