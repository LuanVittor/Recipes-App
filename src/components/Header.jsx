import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import '../css/Header.css';

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
    <div className="header-container-complete">
      <input
        type="image"
        onClick={ () => pushProfile() }
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="profile"
      />
      <h1 data-testid="page-title">{title}</h1>
      <input
        type="image"
        onClick={ () => setSerchBar(!searchBar) }
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="search"
        className="search-top-btn dropbtn"
      />
    </div>
  );

  const inclompleteHeader = (title) => (
    <div className="header-container-incomplete">
      <input
        type="image"
        className="profile-button"
        onClick={ () => pushProfile() }
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="profile"
      />
      <h1 data-testid="page-title">{ title }</h1>
    </div>
  );

  const renderHeader = () => {
    const locationName = history.location.pathname;
    switch (locationName) {
    case '/comidas':
      return completeHeader('Foods');

    case '/explorar/comidas/area':
      return completeHeader('Explore Origin');

    case '/bebidas':
      return completeHeader('Drinks');

    case '/receitas-feitas':
      return inclompleteHeader('Recipes Made');

    case '/receitas-favoritas':
      return inclompleteHeader('Favorite Recipes');

    case '/explorar/comidas':
      return inclompleteHeader('Explore Foods');

    case '/explorar/bebidas/ingredientes':
      return inclompleteHeader('Explore Ingredients');

    case '/explorar/comidas/ingredientes':
      return inclompleteHeader('Explore Ingredients');

    case '/explorar/bebidas':
      return inclompleteHeader('Explore Drinks');

    case '/explorar':
      return inclompleteHeader('Explore');

    case '/perfil':
      return inclompleteHeader('Profile');

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
    <header className="header">
      <div className="header-box">
        {renderHeader()}
        {(searchBar)
          && (
            <div>
              <div className="search">
                <input
                  placeholder="Pesquisa"
                  className="search-input"
                  data-testid="search-input"
                  onChange={ handleInput }
                  value={ searchInputValue }
                />
                <div className="radio">
                  <input
                    label="Ingrediente"
                    className="search-radio"
                    type="radio"
                    value="Ingrediente"
                    data-testid="ingredient-search-radio"
                    name="radio"
                    onChange={ handleChange }
                  />

                  <input
                    label="Nome"
                    className="search-radio"
                    type="radio"
                    value="Nome"
                    data-testid="name-search-radio"
                    name="radio"
                    onChange={ handleChange }
                  />

                  <input
                    label="Primeira Letra"
                    type="radio"
                    value="Primeira Letra"
                    data-testid="first-letter-search-radio"
                    name="radio"
                    onChange={ handleChange }
                  />
                  <button
                    type="button"
                    className="search-btn"
                    onClick={ getPathName }
                    data-testid="exec-search-btn"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>
    </header>
  );
}
