import React from 'react';
import classNames from 'classnames';
import Icon from './Icon';
import '../assets/styles/MainCard.scss';

const MainCard = ({ socialMedia, counter, status }) => {

  return (
    <article className={
      classNames('main__item', {
        [`${socialMedia.name}`]: true,
      })
    }
    >
      <div className='social-media'>
        <Icon name={socialMedia.name} />
        <span>{socialMedia.userName}</span>
      </div>
      <div className='count'>
        <span>{counter.number}</span>
        <p>{counter.type}</p>
      </div>
      <div className={
        classNames('current', {
          [`${status.type}`]: true,
        })
      }
      >
        <Icon name={status.type} />
        <span>
          {status.number}
          {' '}
          Today
        </span>
      </div>
    </article>
  );
};

export default MainCard;
