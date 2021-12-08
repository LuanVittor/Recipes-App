import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

export default function Login({ history }) {
  const [emailValue, setEmailValue] = useState('');
  const [passowordValue, setPasswordValue] = useState('');
  const [buttonON, setButtonON] = useState(true);

  const handleChange = ({ target: { value } }) => {
    setEmailValue(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPasswordValue(value);
  };

  const clickButton = () => {
    const user = { email: emailValue };
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(user));
    return history.push('/comidas');
  };

  useEffect(() => {
    const SIX = 6;
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; // /\S+@\S+.com/;
    const validateEmail = emailRegex.test(emailValue);
    if (passowordValue.length > SIX && validateEmail) {
      setButtonON(false);
    } else {
      setButtonON(true);
    }
  }, [emailValue, passowordValue]);

  return (
    <div>
      <input
        placeholder="email"
        name="email"
        value={ emailValue }
        onChange={ handleChange }
        type="email"
        data-testid="email-input"
      />
      <input
        placeholder="password"
        name="password"
        value={ passowordValue }
        onChange={ handleChangePassword }
        type="password"
        data-testid="password-input"
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        onClick={ () => clickButton() }
        disabled={ buttonON }
      >
        Logar
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
