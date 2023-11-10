import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.scss';

const Card = (props) => {
  const [backgroundImage, setBackgroundImage] = useState('default');
  const imageMap = {
    Clouds: 'url(/images/cloud.jpg)',
    Clear: 'url(/images/clear.jpg)',
    Rain: 'url(/images/rain.jpg)',
    Snow: 'url(/images/snow.jpg)',
    Thunderstorm: 'url(/images/Thunderstorm.jpg)',
    Fog: 'url(/images/fog.jpg)',
    Mist: 'url(/images/fog.jpg)',
    Smoke: 'url(/images/fog.jpg)',
    Haze: 'url(/images/fog.jpg)',
    Dust: 'url(/images/fog.jpg)',
    Sand: 'url(/images/fog.jpg)',
    Ash: 'url(/images/fog.jpg)',
    Squall: 'url(/images/fog.jpg)',
    Tornado: 'url(/images/default.jpg)',
    default: 'url(/images/default.jpg)'
  };
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const preloadImage = (url) => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  };

  useEffect(() => {
    if (props.backgroundImage && props.backgroundImage.weather.length > 0) {
      const newBackgroundImage = props.backgroundImage.weather[0].main;
      const imageUrl = imageMap[newBackgroundImage];
      if (!imageUrl) {
        setBackgroundImage('default');
      } else {
        setIsImageLoaded(false);
        preloadImage(imageUrl);
        setBackgroundImage(newBackgroundImage);
      }
    }
  }, [props.backgroundImage]);

  useEffect(() => {
    if (isImageLoaded) {
      document.body.classList.remove('loading');
    } else {
      document.body.classList.add('loading');
    }
  }, [isImageLoaded]);

  return (
    <div
      className={classes.background}
      style={{
        backgroundImage: imageMap[backgroundImage]
      }}
    >
      {props.children}
    </div>
  );
};

Card.propTypes = {
  backgroundImage: PropTypes.object,
  children: PropTypes.node
};

export default Card;
