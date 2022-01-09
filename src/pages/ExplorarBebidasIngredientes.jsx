import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarBebidasIngredientes() {
  const [categories, setCategories] = useState([]);
  const TWELVE = 12;

  const fetchIngredientes = () => (
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((resp) => resp.json())
      .then((r) => setCategories(r.drinks))
  );

  useEffect(() => {
    fetchIngredientes();
  }, []);

  return (
    <div>
      <Header />
      {console.log(categories)}
      {(categories.length !== 0) && (
        categories.map((elem, i) => {
          if (i < TWELVE) {
            return (
              <Link to="/bebidas">
                <div data-testid={ `${i}-ingredient-card` } key={ i }>
                  <img
                    data-testid={ `${i}-card-img` }
                    src={ `https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient1}-Small.png` }
                    alt="thumb"
                  />
                  <h3 data-testid={ `${i}-card-name` }>{ elem.strIngredient1 }</h3>
                </div>
              </Link>
            );
          }
          return null;
        })
      )}
      <Footer />
    </div>
  );
}
