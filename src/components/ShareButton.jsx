import clipboardCopy from 'clipboard-copy';
import React, { useState } from 'react';

import shareIcon from '../images/shareIcon.svg';

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
    <div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ () => shareButton() }
      >
        <img src={ shareIcon } alt="img" />
      </button>
      {(clipboard) && <p>Link copiado!</p>}
    </div>
  );
}
