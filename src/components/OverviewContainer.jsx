import React from 'react';
import '../assets/styles/OverviewContainer.scss';

const OverviewContainer = ({ children }) => (
  <section className='overview'>
    <h1 className='title'>Overview - Today</h1>
    <div className='overview-content'>
      { children }
    </div>
  </section>
);

export default OverviewContainer;
