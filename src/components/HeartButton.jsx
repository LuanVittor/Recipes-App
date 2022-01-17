import React from 'react';
import emptyHeart from '../images/whiteHeartIcon.svg';
import fullHeart from '../images/blackHeartIcon.svg';
import '../css/ComidasID.css';

export default function HeartButton(param) {
  return (
    <div className="like-share">
      <input
        className="heart-btn"
        alt="favorite"
        type="image"
        src={ (param.favorite) ? fullHeart : emptyHeart }
        onClick={ () => param.addFavorite() }
        data-testid={ param.dataTestId }
      />
    </div>
  );
}
