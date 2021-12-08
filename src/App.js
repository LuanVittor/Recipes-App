import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import Login from './pages/Login';
import Comidas from './pages/Comidas';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Comidas } />
        <Route path="/bebidas" />
        <Route path="/perfil" />
        <Route path="/comidas/{id-da-receita}" />
        <Route path="/bebidas/{id-da-receita}" />
        <Route path="/comidas/{id-da-receita}/in-progress" />
        <Route path="/bebidas/{id-da-receita}/in-progress" />
        <Route path="/explorar" />
        <Route path="/explorar/comidas" />
        <Route path="/explorar/bebidas" />
        <Route path="/explorar/comidas/ingredientes" />
        <Route path="/explorar/bebidas/ingredientes" />
        <Route path="/explorar/comidas/area" />
        <Route path="/receitas-feitas" />
        <Route path="/receitas-favoritas" />
      </Switch>
    </div>
  );
}
