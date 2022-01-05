import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Perfil() {
  const history = useHistory();

  const getLocal = () => {
    const localStorager = JSON.parse(localStorage.getItem('user'));
    return (
      <p data-testid="profile-email">{localStorager.email}</p>
    );
  };

  const cleanLocalStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      {getLocal()}
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }

      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        onClick={ () => cleanLocalStorage() }
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>

      <Footer />
    </div>
  );
}
