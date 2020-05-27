import React from 'react';
import '../assets/styles/MainCard.scss';

const MainCard = () => (
  <article className='main__item facebook'>
    <div className='social-media'>
      <img src='./images/icon-facebook.svg' alt='facebook' />
      <span>@jmunoz</span>
    </div>
    <div className='count'>
      <span>1987</span>
      <p>Followers</p>
    </div>
    <div className='current up'>
      <img src='./images/icon-up.svg' alt='up' />
      <span>12 Today</span>
    </div>
  </article>
);

export default MainCard;
