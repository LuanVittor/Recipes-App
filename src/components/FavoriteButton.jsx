import React, { useState, useEffect } from 'react';
import { createFavoriteLocalStorage } from '../services/CreateLocalStorages';
import HeartButton from './HeartButton';

export default function FavoriteButton(info) {
  const [favorite, setFavorite] = useState(false);
  const [favoritesUpdate, setFavoritesUpdate] = useState([{}]);

  const { apiRetur, index } = info;

  const checkFavorite = async () => {
    const favoriteLocal = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favoriteLocal || favoriteLocal.length === 0) {
      createFavoriteLocalStorage();
    }
    const id = apiRetur[0].idMeal || apiRetur[0].idDrink || apiRetur[index].id;
    if (favoriteLocal !== null) {
      if (favoriteLocal.some((elem) => elem.id === id)) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  };

  const addFavorite = async () => {
    const favoriteLocal = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    const id = apiRetur[0].idMeal || apiRetur[0].idDrink || apiRetur[index].id;
    if (favoriteLocal.some((elem) => elem.id === id)) {
      const newFavorites = favoriteLocal.filter((elem) => elem.id !== apiRetur[0].idMeal
        && elem.id !== apiRetur[0].idDrink && elem.id !== apiRetur[index].id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
      setFavoritesUpdate(newFavorites);
      info.setThird(!info.third);
    } else {
      const newFavorites = [...favoriteLocal, {
        id: apiRetur[0].idMeal || apiRetur[0].idDrink,
        type: (apiRetur[0].idMeal) ? 'comida' : 'bebida',
        area: apiRetur[0].strArea || apiRetur[0].area || '',
        category: apiRetur[0].strCategory,
        alcoholicOrNot: apiRetur[0].strAlcoholic || apiRetur[0].alcoholicOrNot || '',
        name: apiRetur[0].strMeal || apiRetur[0].strDrink,
        image: apiRetur[0].strMealThumb || apiRetur[0].strDrinkThumb,
      }];
      setFavoritesUpdate(newFavorites);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    }
  };

  useEffect(() => {
    checkFavorite();
  }, [favoritesUpdate]);

  return (
    <HeartButton
      dataTestId={ info.dataTestId }
      addFavorite={ addFavorite }
      favorite={ favorite }
    />

  );
}
