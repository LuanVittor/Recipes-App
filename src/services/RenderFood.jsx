import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';

export default function RenderFood() {
  const history = useHistory();
  const { returnApi } = useContext(ApiContext);
  const TWELVE = 24;
  if (!returnApi) {
    return null;
  } if (returnApi.length === 1) {
    history.push(`/comidas/${returnApi[0].idMeal}`);
  } if (returnApi.length > 1) {
    return returnApi.map((elem, index) => {
      if (index < TWELVE) {
        return (
          <Link to={ `/comidas/${returnApi[index].idMeal}` } key={ index }>
            <div className="cards" data-testid={ `${index}-recipe-card` }>
              <img
                className="img-card"
                data-testid={ `${index}-card-img` }
                src={ elem.strMealThumb }
                alt="thumb"
              />
              <h3
                className="card__title"
                data-testid={ `${index}-card-name` }
              >
                {elem.strMeal}
              </h3>
            </div>
          </Link>
        );
      }
      return null;
    });
  }
}
