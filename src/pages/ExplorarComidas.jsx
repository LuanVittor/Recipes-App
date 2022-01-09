import React from 'react';
import ButtonsExplore from '../components/ButtonsExplore';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ExportarComidas() {
  return (
    <div>
      <Header />
      <ButtonsExplore type="comidas" />
      <Footer />
    </div>
  );
}
