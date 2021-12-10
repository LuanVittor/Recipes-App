import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ApiContext from '../Context/ApiContext';

export default function Comidas() {
  const history = useHistory();
  const { returnApi } = useContext(ApiContext);

  const renderFood = () => {
    const TWELVE = 12;
    if (!returnApi) {
      return null;
    } if (returnApi.length === 1) {
      history.push(`/comidas/${returnApi[0].idMeal}`);
    } if (returnApi.length > 1) {
      return returnApi.map((elem, index) => {
        if (index < TWELVE) {
          return (
            <div data-testid={ `${index}-recipe-card` } key={ index }>
              <img
                data-testid={ `${index}-card-img` }
                src={ elem.strMealThumb }
                alt="thumb"
              />
              <h3 data-testid={ `${index}-card-name` }>{ elem.strMeal }</h3>
            </div>
          );
        }
        return null;
      });
    }
  };

  return (
    <div>
      <Header />
      {renderFood()}
      <Footer />
    </div>
  );
}
