import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/ButtonsExplorer.css';

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
    <div className="navi-explore">
      <button
        className="explore-button"
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push(`/explorar/${foodOrDrink.type}/ingredientes`) }
      >
        By Ingredients
      </button>
      {(foodOrDrink.type === 'comidas') && (
        <button
          className="explore-button"
          type="button"
          data-testid="explore-by-area"
          onClick={ () => history.push(`/explorar/${foodOrDrink.type}/area`) }

        >
          By Place of Origin
        </button>
      )}
      <button
        className="explore-button"
        type="button"
        data-testid="explore-surprise"
        onClick={ () => surpriseMe() }
      >
        Surprise me!
      </button>
    </div>
  );
}
