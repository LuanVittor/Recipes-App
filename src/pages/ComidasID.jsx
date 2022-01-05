import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecommendationsFood from '../components/RecommendationFood';
import '../css/IniciarReceita.css';

export default function ComidasID(id) {
  const history = useHistory();
  const [responseFood, setResponseFood] = useState([]);

  const returnById = () => (
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.match.params.id}`)
      .then((resp) => resp.json())
      .then((r) => setResponseFood(r))
  );

  useEffect(() => {
    returnById();
  }, []);

  const { meals } = responseFood;
  const TWENTY = 20;

  return (
    <div>
      {(responseFood.length === 0) ? null : (
        <div>
          <img src={ meals[0].strMealThumb } alt="Food" data-testid="recipe-photo" />
          <h1 data-testid="recipe-title">{meals[0].strMeal}</h1>
          <p data-testid="recipe-category">{meals[0].strCategory}</p>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
          <div>
            <h3>Ingredientes</h3>
            {(Object.entries(meals[0]).filter((elem) => elem[0].includes('Ingredient')
            || elem[0].includes('Measure'))
              .map((elem, index, arr) => {
                if (elem[1] !== null && elem[1] !== '' && index < TWENTY) {
                  return (
                    <p
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`${elem[1]}-${arr[index + TWENTY][1]}`}
                    </p>
                  );
                }
                return null;
              }))}
          </div>
          <p data-testid="instructions">{meals[0].strInstructions}</p>
          <iframe
            src={ meals[0].strYoutube }
            frameBorder="0"
            data-testid="video"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
          <div>
            <h3>Recomendadas</h3>
            <RecommendationsFood />
          </div>
          <button
            type="button"
            className="start-recipe"
            data-testid="start-recipe-btn"
            onClick={ () => history.push(`${id.match.params.id}/in-progress`) }
          >
            Iniciar Receita
          </button>
        </div>
      )}
    </div>
  );
}
