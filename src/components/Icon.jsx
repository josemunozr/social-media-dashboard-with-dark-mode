import React from 'react';
import facebookIcon from '../assets/static/icon-facebook.svg';
import instagramIcon from '../assets/static/icon-instagram.svg';
import twitterIcon from '../assets/static/icon-twitter.svg';
import youtubeIcon from '../assets/static/icon-youtube.svg';
import upIcon from '../assets/static/icon-up.svg';
import downIcon from '../assets/static/icon-down.svg';

const Icon = ({ name }) => {
  switch (name) {
    case 'facebook':
      return (
        <img src={facebookIcon} alt={name} />
      );
    case 'instagram':
      return (
        <img src={instagramIcon} alt={name} />
      );
    case 'twitter':
      return (
        <img src={twitterIcon} alt={name} />
      );
    case 'youtube':
      return (
        <img src={youtubeIcon} alt={name} />
      );
    case 'up':
      return (
        <img src={upIcon} alt={name} />
      );
    case 'down':
      return (
        <img src={downIcon} alt={name} />
      );
    default:
      return null;
  }
};

export default Icon;
