import React, { useEffect, useState } from 'react';

export default function ComidasProgress(id) {
  const [loaded, setLoaded] = useState(false);
  const [returnApi, setReturnApi] = useState([]);
  // const [returnRecipes, setReturnRecipes] = useState([]);

  const getFoods = async () => {
    // const getLocal = await JSON.parse(localStorage.getItem('inProgressRecipes'));
    await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.match.params.id}`)
      .then((data) => data.json())
      .then((data) => setReturnApi(data));
    // setReturnRecipes(getLocal);
    setLoaded(true);
  };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div>
      {(loaded) && (
        <div>
          {console.log(returnApi.meals[0])}
          <img
            src={ `${returnApi.meals[0].strMealThumb}` }
            alt="img"
            data-testid="recipe-photo"
          />
          <h1 data-testid="recipe-title">
            { returnApi.meals[0].strMeals }
          </h1>
          <input data-testid="share-btn" type="image" src="" alt="test" />
          <input data-testid="favorite-btn" type="image" src="" alt="test" />
          <p data-testid="recipe-category">
            { returnApi.meals[0].strCategory }
          </p>
          {(Object.entries(returnApi.meals[0])
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
            {returnApi.meals[0].strInstructions}
          </p>
          <button data-testid="finish-recipe-btn" type="button"> </button>
        </div>
      )}
    </div>
  );
}
