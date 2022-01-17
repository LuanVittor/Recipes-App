import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';

export default function RenderDrink() {
  const history = useHistory();
  const { returnApi } = useContext(ApiContext);
  const TWELVE = 24;
  if (!returnApi) {
    return null;
  } if (returnApi.length === 1) {
    history.push(`/bebidas/${returnApi[0].idDrink}`);
  } if (returnApi.length > 1) {
    return returnApi.map((elem, index) => {
      if (index < TWELVE) {
        return (
          <Link to={ `/bebidas/${returnApi[index].idDrink}` }>
            <div
              className="cards"
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <img
                className="img-card"
                data-testid={ `${index}-card-img` }
                src={ elem.strDrinkThumb }
                alt="thumb"
              />
              <h3
                className="card__title"
                data-testid={ `${index}-card-name` }
              >
                {elem.strDrink}
              </h3>
            </div>
          </Link>
        );
      }
      return null;
    });
  }
}
