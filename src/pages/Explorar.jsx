import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Explorar() {
  const history = useHistory();
  return (
    <div>
      <Header />
      <button
        type="button"
        data-testid="explore-food"
        onClick={ () => history.push('/explorar/comidas') }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explorar/bebidas') }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </div>
  );
}
