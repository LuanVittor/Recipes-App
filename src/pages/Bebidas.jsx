import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ApiContext from '../Context/ApiContext';

export default function Bebidas() {
  const history = useHistory();
  const { returnApi } = useContext(ApiContext);

  const renderDrink = () => {
    const TWELVE = 12;
    if (!returnApi) {
      return null;
    } if (returnApi.length === 1) {
      history.push(`/bebidas/${returnApi[0].idDrink}`);
    } if (returnApi.length > 1) {
      return returnApi.map((elem, index) => {
        if (index < TWELVE) {
          return (
            <div data-testid={ `${index}-recipe-card` } key={ index }>
              <img
                data-testid={ `${index}-card-img` }
                src={ elem.strDrinkThumb }
                alt="thumb"
              />
              <h3 data-testid={ `${index}-card-name` }>{ elem.strDrink }</h3>
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
      {renderDrink()}
      <Footer />
    </div>
  );
}
