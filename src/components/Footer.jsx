import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exporeIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer data-testid="footer" className="footer">
      <div>
        <Link to="/bebidas">
          <img
            src={ drinkIcon }
            alt="drink-icon"
            data-testid="drinks-bottom-btn"
          />
        </Link>
        <Link to="/explorar">
          <img
            src={ exporeIcon }
            alt="explore-icon"
            data-testid="explore-bottom-btn"
          />
        </Link>
        <Link to="/comidas">
          <img
            src={ mealIcon }
            alt="food-icon"
            data-testid="food-bottom-btn"
          />
        </Link>
      </div>
    </footer>
  );
}
