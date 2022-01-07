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
      <input
        alt="share"
        type="image"
        data-testid="share-btn"
        src={ shareIcon }
        onClick={ () => shareButton() }
      />
      {(clipboard) && <p>Link copiado!</p>}
    </div>
  );
}
