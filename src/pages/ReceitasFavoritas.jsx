import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import ShareButton from '../components/ShareButton';
import FavoriteButton from '../components/FavoriteButton';
import '../css/Buttons.css';

export default function ReceitasFavoritas() {
  const [infoLocal, setInfoLocal] = useState([]);
  const [infoToRender, setInfoToRender] = useState([]);
  const [third, setThird] = useState(false);

  useEffect(() => {
    setInfoLocal((JSON.parse(localStorage.getItem('favoriteRecipes'))));
    setInfoToRender((JSON.parse(localStorage.getItem('favoriteRecipes'))));
  }, [third]);

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
            <div key={ elem.id } className="cards">
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
              <FavoriteButton
                third={ third }
                setThird={ setThird }
                dataTestId={ `${i}-horizontal-favorite-btn` }
                apiRetur={ infoToRender }
                index={ i }
              />
              <ShareButton
                dataTestid={ `${i}-horizontal-share-btn` }
                pathname={ `/${elem.type}s/${elem.id}` }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// alcoholicOrNot: ""
// area: "Turkish"
// category: "Side"
// id: "52977"
// image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg"
// name: "Corba"
// type: "comida"
