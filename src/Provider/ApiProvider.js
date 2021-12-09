import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';

export default function ApiProvider({ children }) {
  const history = useHistory();
  const [selectAPI, setSelectAPI] = useState();
  const [searchInputValue, setSearchInputValue] = useState('');
  const [returnApi, setReturnApi] = useState([]);

  const handleInput = ({ target: { value } }) => {
    setSearchInputValue(value);
  };

  const selectRadio = (value) => {
    setSelectAPI(value);
  };

  const reqDrinkApi = () => {
    if (selectAPI === 'Ingrediente') {
      return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInputValue}`)
        .then((resp) => resp.json())
        .then((r) => setReturnApi(r.meals));
    } if (selectAPI === 'Nome') {
      return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
        .then((resp) => resp.json())
        .then((r) => setReturnApi(r.meals));
    } if (selectAPI === 'Primeira Letra' && searchInputValue.length === 1) {
      return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInputValue}`)
        .then((resp) => resp.json())
        .then((r) => setReturnApi(r.meals));
    } if (searchInputValue.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const reqFoodApi = () => {
    if (selectAPI === 'Ingrediente') {
      return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputValue}`)
        .then((resp) => resp.json())
        .then((r) => setReturnApi(r.meals));
    } if (selectAPI === 'Nome') {
      return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputValue}`)
        .then((resp) => resp.json())
        .then((r) => setReturnApi(r.meals));
    } if (selectAPI === 'Primeira Letra' && searchInputValue.length === 1) {
      return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInputValue}`)
        .then((resp) => resp.json())
        .then((r) => setReturnApi(r.meals));
    } if (searchInputValue.length > 1) {
      return global.alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };

  const getPathName = () => {
    if (history.location.pathname === '/comidas') {
      return reqFoodApi();
    } if (history.location.pathname === '/bebidas') {
      return reqDrinkApi();
    }
  };

  const checkArray = () => (
    (returnApi.length === 1) ? console.log('teste') : null
  );

  const myContext = {
    searchInputValue,
    handleInput,
    selectRadio,
    getPathName,
    checkArray,
  };
  return (
    <ApiContext.Provider value={ myContext }>
      { children }
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
