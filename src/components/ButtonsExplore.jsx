import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ButtonsExplore(foodOrDrink) {
  const history = useHistory();

  const surpriseMe = () => {
    if (foodOrDrink.type === 'comidas') {
      fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((resp) => resp.json())
        .then((r) => history.push(`/comidas/${r.meals[0].idMeal}`));
    } else {
      fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((resp) => resp.json())
        .then((r) => history.push(`/bebidas/${r.drinks[0].idDrink}`));
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push(`/explorar/${foodOrDrink.type}/ingredientes`) }
      >
        Por Ingredientes
      </button>
      {(foodOrDrink.type === 'comidas') && (
        <button
          type="button"
          data-testid="explore-by-area"
          onClick={ () => history.push(`/explorar/${foodOrDrink.type}/area`) }

        >
          Por Local de Origem
        </button>
      )}
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => surpriseMe() }
      >
        Me Surpreenda!
      </button>
    </div>
  );
}
