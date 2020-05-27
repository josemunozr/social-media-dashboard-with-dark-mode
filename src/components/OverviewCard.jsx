import React from 'react';
import '../assets/styles/OverviewCard.scss';

const OverviewCard = () => (
  <div className='overview__card'>
    <header className='overview__card-header'>
      <p className='title'>Page Views</p>
      <img src='./images/icon-facebook.svg' alt='facebook' />
    </header>
    <footer className='overview__card-footer'>
      <span className='overview__card-footer--number'>87</span>
      <div className='current up'>
        <img src='./images/icon-up.svg' alt='up' />
        <span className='current__number'>3%</span>
      </div>
    </footer>
  </div>
);

export default OverviewCard;
