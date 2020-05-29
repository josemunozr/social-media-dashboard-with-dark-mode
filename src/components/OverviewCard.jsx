import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import '../assets/styles/OverviewCard.scss';

const OverviewCard = ({ title, socialMedia, counter, status }) => (
  <div className='overview__card'>
    <header className='overview__card-header'>
      <p className='title'>{title}</p>
      <Icon name={socialMedia} />
    </header>
    <footer className='overview__card-footer'>
      <span className='overview__card-footer--number'>{counter}</span>
      <div className={
        classNames('current', {
          [`${status.type}`]: true,
        })
      }
      >
        <Icon name={status.type} />
        <span className='current__number'>
          { status.number }
          %
        </span>
      </div>
    </footer>
  </div>
);

export default OverviewCard;
