import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarComidasIngredientes() {
  const [categories, setCategories] = useState([]);
  const TWELVE = 12;

  const fetchIngredientes = () => (
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((resp) => resp.json())
      .then((r) => setCategories(r.meals))
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
              <Link to="/comidas">
                <div data-testid={ `${i}-ingredient-card` } key={ i }>
                  <img
                    data-testid={ `${i}-card-img` }
                    src={ `https://www.themealdb.com/images/ingredients/${elem.strIngredient}-Small.png` }
                    alt="thumb"
                  />
                  <h3 data-testid={ `${i}-card-name` }>{ elem.strIngredient }</h3>
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
