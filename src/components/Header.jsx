import React from 'react';
import classNames from 'classnames';
import '../assets/styles/Header.scss';

const Header = ({ theme, handleClickSwitch }) => (
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
        <div
          className={classNames('switch', {
            'darkTheme': theme === 'darkTheme',
          })}
          onClick={handleClickSwitch}
        />
      </div>
    </div>
  </header>
);

export default Header;
