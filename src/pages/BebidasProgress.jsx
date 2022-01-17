import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FavoriteButton from '../components/FavoriteButton';
import ShareButton from '../components/ShareButton';
import { createDOneLocalStorage,
  createInProgressRecipes } from '../services/CreateLocalStorages';

function test(id) {
  const initialLocal = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!initialLocal) {
    return [];
  }
  return initialLocal.cocktails[id.match.params.id] || [];
}

export default function BebidasProgress(id) {
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [returnApi, setReturnApi] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState(test(id));

  const clickButton = () => {
    createDOneLocalStorage(returnApi.drinks[0]);
    history.push('/receitas-feitas');
  };

  function checkIngredient({ target }) {
    const { name } = target;
    if (target.checked) {
      setCheckedIngredients([...checkedIngredients, name]);
    } else {
      setCheckedIngredients(checkedIngredients.filter((elem) => elem !== name));
    }
  }

  const getDrink = async () => {
    createInProgressRecipes();
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.match.params.id}`)
      .then((data) => data.json())
      .then((data) => setReturnApi(data));
    setLoaded(true);

    let getLocal = await JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!getLocal || Object.keys(getLocal.cocktails).length === 0) {
      getLocal = { cocktails: { [id.match.params.id]: [] }, meals: {} };
      localStorage.setItem('inProgressRecipes', JSON.stringify(getLocal));
    } else {
      const inProgressRecipes = {
        ...getLocal,
        cocktails: { ...getLocal.cocktails, [id.match.params.id]: checkedIngredients } };
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    }
  };

  useEffect(() => {
    getDrink();
    if (returnApi.length !== 0) {
      const allIngredients = (Object.entries(returnApi.drinks[0])
        .filter((elem) => elem[0].includes('Ingredient')))
        .filter((elem) => elem[1] !== null)
        .filter((elem) => elem[1] !== '');
      if (checkedIngredients.length === allIngredients.length) {
        setIsDisabled(false);
      } else {
        console.log(returnApi);
        setIsDisabled(true);
      }
    }
  }, [checkedIngredients]);

  return (
    <div>
      {(loaded) && (
        <div className="container-comidasID">
          <img
            src={ `${returnApi.drinks[0].strDrinkThumb}` }
            alt="img"
            data-testid="recipe-photo"
            className="comida-img"
          />
          <h1 className="h1-title" data-testid="recipe-title">
            { returnApi.drinks[0].strDrink }
          </h1>
          <FavoriteButton dataTestId="favorite-btn" apiRetur={ returnApi.drinks } />
          <ShareButton
            dataTestid="share-btn"
            pathname={ `/bebidas/${id.match.params.id}` }
          />
          <p data-testid="recipe-category">
            { returnApi.drinks[0].strCategory }
          </p>
          <div className="list-ingredients">
            {(Object.entries(returnApi.drinks[0])
              .filter((elem) => elem[0].includes('Ingredient'))
              .map((elem, index) => {
                if (elem[1] !== null && elem[1] !== '') {
                  return (
                    <div key={ index }>
                      <label
                        htmlFor="recipes"
                        data-testid={ `${index}-ingredient-step` }
                      >
                        <input
                          type="checkbox"
                          name={ elem[1] }
                          id={ `${index}-${elem[1]}` }
                          onClick={ checkIngredient }
                          checked={ (checkedIngredients).includes(elem[1]) }
                        />
                        {`${elem[1]}`}
                      </label>
                    </div>
                  );
                }
                return null;
              }))}
          </div>
          <p data-testid="instructions">
            {returnApi.drinks[0].strInstructions}
          </p>
          <button
            className="progress-recipe"
            disabled={ isDisabled }
            data-testid="finish-recipe-btn"
            type="button"
            onClick={ () => clickButton() }
          >
            Finish
          </button>
        </div>
      )}
    </div>
  );
}
