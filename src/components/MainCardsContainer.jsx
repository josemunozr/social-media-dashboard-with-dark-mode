import React from 'react';
import '../assets/styles/MainCardsContainer.scss';

const MainCardsContainer = ({ children }) => (
  <section className='main'>
    { children }
  </section>
);

export default MainCardsContainer;
