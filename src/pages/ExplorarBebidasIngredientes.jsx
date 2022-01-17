import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExplorarBebidasIngredientes() {
  const [categories, setCategories] = useState([]);
  const TWELVE = 32;

  const fetchIngredientes = () => (
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((resp) => resp.json())
      .then((r) => setCategories(r.drinks))
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
                <div
                  className="card cards"
                  data-testid={ `${i}-ingredient-card` }
                  key={ i }
                >
                  <Link to="/bebidas">

                    <img
                      className="img-card-ingredients-drink"
                      data-testid={ `${i}-card-img` }
                      src={ `https://www.thecocktaildb.com/images/ingredients/${elem.strIngredient1}-Small.png` }
                      alt="thumb"
                    />
                    <h3
                      className="card__title"
                      data-testid={ `${i}-card-name` }
                    >
                      { elem.strIngredient1 }
                    </h3>
                  </Link>
                </div>
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
