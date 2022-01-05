import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReceitasFeitas() {
  return (
    <div>
      <Header />
      <button data-testid="filter-by-all-btn" type="button"> All </button>
      <button data-testid="filter-by-food-btn" type="button"> Food </button>
      <button data-testid="filter-by-drink-btn" type="button"> Drinks </button>
      <img src="" alt="" data-testid={ `${0}-horizontal-image` } />
      <p>  </p>
      <Footer />
    </div>
  );
}
