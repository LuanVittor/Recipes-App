import React, { useEffect, useState } from 'react';

export default function BebidasProgress(id) {
  const [loaded, setLoaded] = useState(false);
  const [returnApi, setReturnApi] = useState([]);

  const getDrink = async () => {
    await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.match.params.id}`)
      .then((data) => data.json())
      .then((data) => setReturnApi(data));
    setLoaded(true);
  };

  useEffect(() => {
    getDrink();
  }, []);

  return (
    <div>
      {(loaded) && (
        <div>
          <img
            src={ `${returnApi.drinks[0].strDrinkThumb}` }
            alt="img"
            data-testid="recipe-photo"
          />
          <h1 data-testid="recipe-title">
            { returnApi.drinks[0].strDrink }
          </h1>
          <input data-testid="share-btn" type="image" src="" alt="test" />
          <input data-testid="favorite-btn" type="image" src="" alt="test" />
          <p data-testid="recipe-category">
            { returnApi.drinks[0].strCategory }
          </p>
          {(Object.entries(returnApi.drinks[0])
            .filter((elem) => elem[0].includes('Ingredient'))
            .map((elem, index) => {
              if (elem[1] !== null && elem[1] !== '') {
                return (
                  <p
                    data-testid={ `${index}-ingredient-step` }
                  >
                    {`${elem[1]}`}
                  </p>
                );
              }
              return null;
            }))}
          <p data-testid="instructions">
            {returnApi.drinks[0].strInstructions}
          </p>
          <button data-testid="finish-recipe-btn" type="button"> </button>
        </div>
      )}
    </div>
  );
}
