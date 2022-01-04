import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ApiContext from '../Context/ApiContext';
import RenderDrink from '../services/RenderDrink';

export default function Bebidas() {
  const { reqDrinkApi } = useContext(ApiContext);

  const [categories, setCategories] = useState([]);
  const [filterReturn, setFilterReturn] = useState([]);
  const [filterTrueOrFalse, setFilterTrueOrFalse] = useState(false);

  const getCategories = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .then((resp) => resp.json())
      .then((rr) => setCategories(rr.drinks));
  };

  const filterButton = (param) => {
    setFilterTrueOrFalse(!filterTrueOrFalse);
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${param}`)
      .then((resp) => resp.json())
      .then((r) => {
        if (filterReturn === r.drinks) {
          setFilterTrueOrFalse(false);
        } else {
          setFilterReturn(r.drinks);
          setFilterTrueOrFalse(true);
        }
      });
  };

  const renderFiltered = () => {
    const TWELVE = 12;
    return filterReturn.map((elem, index) => {
      if (index < TWELVE) {
        return (
          <Link to={ `/bebidas/${filterReturn[index].idDrink}` }>
            <div data-testid={ `${index}-recipe-card` } key={ index }>
              <img
                data-testid={ `${index}-card-img` }
                src={ elem.strDrinkThumb }
                alt="thumb"
              />
              <h3 data-testid={ `${index}-card-name` }>{ elem.strDrink }</h3>
            </div>
          </Link>
        );
      }
      return null;
    });
  };

  useEffect(() => {
    reqDrinkApi();
    getCategories();
  }, []);

  const renderButtons = () => {
    const FIVE = 5;
    return categories.map((elem, i) => {
      if (i < FIVE) {
        return (
          <button
            type="button"
            onClick={ () => filterButton(elem.strCategory) }
            data-testid={ `${elem.strCategory}-category-filter` }
          >
            { elem.strCategory }
          </button>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <Header />
      {renderButtons()}
      <button
        type="button"
        onClick={ () => setFilterTrueOrFalse(false) }
        data-testid="All-category-filter"
      >
        All
      </button>
      {filterTrueOrFalse ? renderFiltered() : RenderDrink()}
      <Footer />
    </div>
  );
}
