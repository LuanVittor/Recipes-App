import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/Perfil.css';

export default function Perfil() {
  const history = useHistory();

  const getLocal = () => {
    const localStorager = JSON.parse(localStorage.getItem('user'));
    if (localStorager) {
      return (
        <p className="email" data-testid="profile-email">{localStorager.email}</p>
      );
    }
  };

  const cleanLocalStorage = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />
      {getLocal()}
      <div className="navi-profile navi-explore2">
        <button
          className="profile-btn explore-button"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/receitas-feitas') }

        >
          Recipes Made
        </button>
        <button
          className="profile-btn explore-button"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/receitas-favoritas') }
        >
          Favorite Recipes
        </button>
        <button
          className="profile-btn explore-button"
          onClick={ () => cleanLocalStorage() }
          type="button"
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </div>

      <Footer />
    </div>
  );
}
