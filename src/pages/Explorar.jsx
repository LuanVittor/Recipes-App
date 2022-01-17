import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/ButtonsExplorer.css';

export default function Explorar() {
  const history = useHistory();
  return (
    <div>
      <Header />
      <div className="navi-explore">
        <button
          className="explore-button"
          type="button"
          data-testid="explore-food"
          onClick={ () => history.push('/explorar/comidas') }
        >
          Explore Foods
        </button>
        <button
          className="explore-button"
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explorar/bebidas') }
        >
          Explorar Drinks
        </button>
      </div>
      <Footer />
    </div>
  );
}
