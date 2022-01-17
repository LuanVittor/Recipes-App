import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ApiContext from '../Context/ApiContext';
import RenderFood from '../services/RenderFood';
import '../css/Cards.css';
import '../css/Buttons.css';
import '../css/Header.css';

export default function Comidas() {
  const { reqFoodApi } = useContext(ApiContext);
  const [categories, setCategories] = useState([]);
  const [filterReturn, setFilterReturn] = useState([]);
  const [filterTrueOrFalse, setFilterTrueOrFalse] = useState(false);

  const getCategories = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then((resp) => resp.json())
      .then((rr) => setCategories(rr.meals));
  };

  const filterButton = (param) => (
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`)
      .then((resp) => resp.json())
      .then((r) => {
        if (filterReturn === r.meals) {
          setFilterTrueOrFalse(false);
        } else {
          setFilterReturn(r.meals);
          setFilterTrueOrFalse(true);
        }
      })
  );

  const renderFiltered = () => {
    const TWELVE = 12;
    return filterReturn.map((elem, index) => {
      if (index < TWELVE) {
        return (
          <Link
            className="card"
            to={ `/comidas/${filterReturn[index].idMeal}` }
          >
            <div
              className="card cards"
              data-testid={ `${index}-recipe-card` }
              key={ index }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ elem.strMealThumb }
                alt="thumb"
                className="img-card"
              />
              <h3
                className="card__title"
                data-testid={ `${index}-card-name` }
              >
                { elem.strMeal }
              </h3>
            </div>
          </Link>
        );
      }
      return null;
    });
  };

  useEffect(() => {
    reqFoodApi();
    getCategories();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="navi-category">
        {categories.map((elem, i) => {
          const FIVE = 5;
          if (i < FIVE) {
            return (
              <button
                key={ i }
                type="button"
                onClick={ () => filterButton(elem.strCategory) }
                data-testid={ `${elem.strCategory}-category-filter` }
                className="category-button"
              >
                { elem.strCategory }
              </button>
            );
          }
          return null;
        })}
        <button
          type="button"
          onClick={ () => setFilterTrueOrFalse(false) }
          data-testid="All-category-filter"
          className="category-button"
        >
          All
        </button>
      </div>
      <div className="card-container">
        {filterTrueOrFalse ? renderFiltered() : RenderFood()}
      </div>
      <Footer />
    </div>
  );
}
