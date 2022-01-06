import React from 'react';
import emptyHeart from '../images/whiteHeartIcon.svg';
import fullHeart from '../images/blackHeartIcon.svg';

export default function HeartButton(param) {
  return (
    <div>
      <input
        alt="favorite"
        type="image"
        src={ (param.favorite) ? fullHeart : emptyHeart }
        onClick={ () => param.addFavorite() }
        data-testid="favorite-btn"
      />
    </div>
  );
}
