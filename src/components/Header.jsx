import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const history = useHistory();
  const [searchBar, setSerchBar] = useState(false);
  const [radioValue, setRadioValue] = useState();

  const {
    selectRadio,
    handleInput,
    searchInputValue,
    getPathName,
  } = useContext(ApiContext);

  const pushProfile = () => (
    history.push('/perfil')
  );

  const completeHeader = (title) => (
    <div>
      <button type="button" onClick={ () => pushProfile() }>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="profile"
        />
      </button>
      <h1 data-testid="page-title">{title}</h1>
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

  const handleChange = (e) => {
    const { value } = e.target;
    setRadioValue(value);
  };

  useEffect(() => {
    selectRadio(radioValue);
  }, [radioValue, selectRadio]);

  return (
    <header>
      {renderHeader()}
      {(searchBar)
        && (
          <div>
            <input
              data-testid="search-input"
              onChange={ handleInput }
              value={ searchInputValue }
            />
            <label htmlFor="Ingrediente">
              Ingrediente
              <input
                type="radio"
                value="Ingrediente"
                data-testid="ingredient-search-radio"
                name="radio"
                onChange={ handleChange }
              />
            </label>

            <label htmlFor="Nome">
              Nome
              <input
                type="radio"
                value="Nome"
                data-testid="name-search-radio"
                name="radio"
                onChange={ handleChange }
              />
            </label>
            <label htmlFor="Primeira Letra">
              Primeira Letra
              <input
                type="radio"
                value="Primeira Letra"
                data-testid="first-letter-search-radio"
                name="radio"
                onChange={ handleChange }
              />
            </label>
            <button
              type="button"
              onClick={ getPathName }
              data-testid="exec-search-btn"
            >
              Buscar
            </button>
          </div>
        )}
    </header>
  );
}
