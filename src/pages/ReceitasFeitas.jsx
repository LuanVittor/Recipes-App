import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import '../css/Buttons.css';

export default function ReceitasFeitas() {
  const [infoLocal, setInfoLocal] = useState([]);
  const [infoToRender, setInfoToRender] = useState([]);

  useEffect(() => {
    setInfoLocal((JSON.parse(localStorage.getItem('doneRecipes'))));
    setInfoToRender((JSON.parse(localStorage.getItem('doneRecipes'))));
  }, []);

  const filterAll = () => {
    setInfoToRender(infoLocal);
  };

  const filterFood = () => {
    setInfoToRender(infoLocal.filter((elem) => elem.type === 'comida'));
  };

  const filterDrink = () => {
    setInfoToRender(infoLocal.filter((elem) => elem.type === 'bebida'));
  };

  return (
    <div className="container">
      <Header />
      <div className="navi-category">
        <button
          onClick={ () => filterAll() }
          data-testid="filter-by-all-btn"
          type="button"
          className="category-button"
        >
          All
        </button>
        <button
          onClick={ () => filterFood() }
          data-testid="filter-by-food-btn"
          type="button"
          className="category-button"
        >
          Food
        </button>
        <button
          onClick={ () => filterDrink() }
          data-testid="filter-by-drink-btn"
          type="button"
          className="category-button"
        >
          Drinks
        </button>
      </div>
      {(infoToRender !== null && infoToRender.length !== 0) && (
        <div>
          {infoToRender.map((elem, i) => (
            <div className="cards" key={ elem.id }>
              <Link to={ `/${elem.type}s/${elem.id}` }>
                <img
                  src={ elem.image }
                  alt={ elem.name }
                  data-testid={ `${i}-horizontal-image` }
                  className="img-card"
                />
                <p
                  className="card__title"
                  data-testid={ `${i}-horizontal-name` }
                >
                  { elem.name }
                </p>
              </Link>
              <p
                data-testid={ `${i}-horizontal-top-text` }
              >
                { `${elem.area} - ${elem.category} - ${elem.alcoholicOrNot}` }
              </p>
              <p data-testid={ `${i}-horizontal-done-date` }>{ elem.doneDate }</p>
              <ShareButton
                dataTestid={ `${i}-horizontal-share-btn` }
                pathname={ `/${elem.type}s/${elem.id}` }
              />
              {elem.tags.map((tags) => (
                <p
                  key={ i }
                  data-testid={ `${i}-${tags}-horizontal-tag` }
                >
                  { elem.tags }
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
