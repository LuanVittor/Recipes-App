import clipboardCopy from 'clipboard-copy';
import React, { useState } from 'react';

import shareIcon from '../images/shareIcon.svg';
import '../css/ComidasID.css';

export default function ShareButton(rota) {
  const [clipboard, setClipBoard] = useState(false);
  const ONE_SECOND = 1000;

  const shareButton = () => {
    clipboardCopy(`http://localhost:3000${rota.pathname}`);
    setClipBoard(true);
    setTimeout(() => {
      setClipBoard(false);
    }, ONE_SECOND);
  };

  return (
    <div className="like-share">
      <input
        className="share-btn"
        alt="share"
        type="image"
        data-testid={ rota.dataTestid }
        src={ shareIcon }
        onClick={ () => shareButton() }
      />
      {(clipboard) && alert('Link copied!')}
    </div>
  );
}
