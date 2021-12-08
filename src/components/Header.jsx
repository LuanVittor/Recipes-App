import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const history = useHistory();
  const [searchBar, setSerchBar] = useState(false);

  const pushProfile = () => (
    history.push('/perfil')
  );

  // const getPath = () => {
  //   const name = history.location.pathname.split('/');
  //   return name[1].charAt(0).toUpperCase() + name[1].slice(1);
  // };

  const completeHeader = (title) => (
    <div>
      <button type="button" onClick={ () => pushProfile() }>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile"
        />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      <button type="button" onClick={ () => setSerchBar(!searchBar) }>
        <img
          data-testid="search-top-btn"
          src={ searchIcon }
          alt="search"
        />
      </button>
    </div>
  );

  const inclompleteHeader = (title) => (
    <div>
      <button type="button" onClick={ () => pushProfile() }>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile"
        />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
    </div>
  );

  const renderHeader = () => {
    const locationName = history.location.pathname;
    switch (locationName) {
    case '/comidas':
      return completeHeader('Comidas');

    case '/explorar/comidas/area':
      return completeHeader('Explorar Origem');

    case '/bebidas':
      return completeHeader('Bebidas');

    case '/receitas-feitas':
      return inclompleteHeader('Receitas Feitas');

    case '/receitas-favoritas':
      return inclompleteHeader('Receitas Favoritas');

    case '/explorar/comidas':
      return inclompleteHeader('Explorar Comidas');

    case '/explorar/bebidas/ingredientes':
      return inclompleteHeader('Explorar Ingredientes');

    case '/explorar/comidas/ingredientes':
      return inclompleteHeader('Explorar Ingredientes');

    case '/explorar/bebidas':
      return inclompleteHeader('Explorar Bebidas');

    case '/explorar':
      return inclompleteHeader('Explorar');

    case '/perfil':
      return inclompleteHeader('Perfil');

    default:
      return inclompleteHeader('');
    }
  };

  return (
    <header>
      { renderHeader() }
      {(searchBar) && <input data-testid="search-input" />}
    </header>
  );
}
