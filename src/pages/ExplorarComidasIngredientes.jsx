import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarComidasIngredientes() {
  const [categories, setCategories] = useState([]);
  const TWELVE = 32;

  const fetchIngredientes = () => (
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((resp) => resp.json())
      .then((r) => setCategories(r.meals))
  );

  useEffect(() => {
    fetchIngredientes();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="card-container-ing">
        {(categories.length !== 0) && (
          categories.map((elem, i) => {
            if (i < TWELVE) {
              return (
                <Link to="/comidas">
                  <div
                    className="card cards"
                    data-testid={ `${i}-ingredient-card` }
                    key={ i }
                  >
                    <img
                      className="img-card-ingredients-drink"
                      data-testid={ `${i}-card-img` }
                      src={ `https://www.themealdb.com/images/ingredients/${elem.strIngredient}-Small.png` }
                      alt="thumb"
                    />
                    <h3
                      className="card__title"
                      data-testid={ `${i}-card-name` }
                    >
                      { elem.strIngredient }
                    </h3>
                  </div>
                </Link>
              );
            }
            return null;
          })
        )}
      </div>
      <Footer />
    </div>
  );
}
