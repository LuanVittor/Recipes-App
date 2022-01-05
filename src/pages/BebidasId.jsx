import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import RecommendationDrink from '../components/RecommendationDrink';
import '../css/IniciarReceita.css';

export default function BebidasId(id) {
  const history = useHistory();
  const [responseDrinks, setResponseDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const MIL = 1000;

  useEffect(() => {
    (async () => {
      const resp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.match.params.id}`);
      const r = await resp.json();
      setResponseDrinks(r);
      setTimeout(() => {
        setLoading(false);
      }, MIL);
    })();
  }, []);

  const { drinks } = responseDrinks;
  const FIFTEEN = 15;

  if (loading) return <Loading />;

  return (
    <div>
      {console.log(responseDrinks.length === 0)}
      {(responseDrinks.length !== 0 && responseDrinks) && (
        <div>
          {console.log(drinks[0])}
          <img src={ drinks[0].strDrinkThumb } alt="Drink" data-testid="recipe-photo" />
          <h1 data-testid="recipe-title">{drinks[0].strDrink}</h1>
          <p data-testid="recipe-category">{drinks[0].strAlcoholic}</p>
          <button type="button" data-testid="share-btn">Compartilhar</button>
          <button type="button" data-testid="favorite-btn">Favoritar</button>
          <div>
            <h3>Ingredientes</h3>
            {(Object.entries(drinks[0]).filter((elem) => elem[0].includes('Ingredient')
            || elem[0].includes('Measure'))
              .map((elem, index, arr) => {
                if (elem[1] !== null && elem[1] !== '' && index < FIFTEEN) {
                  return (
                    <p
                      data-testid={ `${index}-ingredient-name-and-measure` }
                    >
                      {`${elem[1]}-${arr[index + FIFTEEN][1]}`}
                    </p>
                  );
                }
                return null;
              }))}
          </div>
          <p data-testid="instructions">{drinks[0].strInstructions}</p>
          <div>
            <h3>Recomendadas</h3>
            <RecommendationDrink />
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
