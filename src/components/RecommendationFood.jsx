import React, { useState, useEffect } from 'react';
import '../css/ComidasID.css';

export default function RecommendationsFood() {
  const SIX = 6;
  const [recommendations, setRecommendations] = useState([]);

  const returnRecommendations = () => (
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      .then((resp) => resp.json())
      .then((r) => setRecommendations(r))
  );

  useEffect(() => {
    returnRecommendations();
  }, []);

  return (
    <div className="limit-container">
      {(recommendations.length === 0) ? null : (
        recommendations.drinks.map((elem, i) => {
          if (i < SIX) {
            const INDEX2 = i < 2;
            return (
              <div
                className="cards"
                data-testid={ `${i}-recomendation-card` }
                key={ i }
                style={ { display: INDEX2 ? 'block' : 'none' } }
              >
                <img className="img-card" src={ elem.strDrinkThumb } alt="Drink" />
                <h1
                  className="card__title"
                  data-testid={ `${i}-recomendation-title` }
                >
                  {elem.strDrink}
                </h1>
              </div>
            );
          }
          return null;
        })
      )}
    </div>
  );
}
