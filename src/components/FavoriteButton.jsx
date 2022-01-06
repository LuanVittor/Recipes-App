import React, { useState, useEffect } from 'react';
import HeartButton from './HeartButton';

export default function FavoriteButton(info) {
  const [favorite, setFavorite] = useState(false);
  const [favoritesUpdate, setFavoritesUpdate] = useState([{}]);

  const { apiRetur } = info;

  const checkFavorite = async () => {
    let favoriteLocal = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (!favoriteLocal || favoriteLocal.length === 0) {
      favoriteLocal = [];
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteLocal));
    }
    const id = apiRetur[0].idMeal || apiRetur[0].idDrink;
    if (favoriteLocal.some((elem) => elem.id === id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  };

  const addFavorite = async () => {
    const favoriteLocal = await JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (favoriteLocal.some((elem) => elem.id === apiRetur[0].idMeal
      || elem.id === apiRetur[0].idDrink)) {
      const newFavorites = favoriteLocal.filter((elem) => elem.id !== apiRetur[0].idMeal
        && elem.id !== apiRetur[0].idDrink);
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
      setFavoritesUpdate(newFavorites);
    } else {
      const newFavorites = [...favoriteLocal, {
        id: apiRetur[0].idMeal || apiRetur[0].idDrink,
        type: (apiRetur[0].idMeal) ? 'comida' : 'bebida',
        area: apiRetur[0].strArea || '',
        category: apiRetur[0].strCategory,
        alcoholicOrNot: apiRetur[0].strAlcoholic || '',
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
    <div>
      <HeartButton addFavorite={ addFavorite } favorite={ favorite } />
    </div>
  );
}
