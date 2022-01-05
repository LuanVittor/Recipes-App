import React, { useState, useEffect } from 'react';

export default function RecommendationDrink() {
  const SIX = 6;
  const [recommendations, setRecommendations] = useState([]);

  const returnRecommendations = () => (
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((resp) => resp.json())
      .then((r) => setRecommendations(r))
  );

  useEffect(() => {
    returnRecommendations();
  }, []);

  return (
    <div>
      {(recommendations.length === 0) ? null : (
        recommendations.meals.map((elem, i) => {
          if (i < SIX) {
            const INDEX2 = i < 2;
            return (
              <div
                data-testid={ `${i}-recomendation-card` }
                key={ i }
                style={ { display: INDEX2 ? 'block' : 'none' } }
              >
                <img src={ elem.strMealThumb } alt="Meal" />
                <h1 data-testid={ `${i}-recomendation-title` }>{elem.strMeal}</h1>
              </div>
            );
          }
          return null;
        })
      )}
    </div>
  );
}
