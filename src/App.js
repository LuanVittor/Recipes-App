import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route } from 'react-router';
import Login from './pages/Login';
import Comidas from './pages/Comidas';
import Perfil from './pages/Perfil';
import Bebidas from './pages/Bebidas';
import ExplorarComidasIngredientes from './pages/ExplorarComidasIngredientes';
import ExplorarComidas from './pages/ExplorarComidas';
import Explorar from './pages/Explorar';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ExplorarComidasArea from './pages/ExplorarComidasArea';
import ExplorarBebidasIngredientes from './pages/ExplorarBebidasIngredientes';
import ComidasID from './pages/ComidasID';
import ApiProvider from './Provider/ApiProvider';
import BebidasId from './pages/BebidasId';
import ComidasProgress from './pages/ComidasProgress';
import BebidasProgress from './pages/BebidasProgress';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div>
      <ApiProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/comidas" component={ Comidas } />
          <Route exact path="/bebidas" component={ Bebidas } />
          <Route exact path="/perfil" component={ Perfil } />
          <Route exact path="/comidas/:id" component={ ComidasID } />
          <Route exact path="/bebidas/:id" component={ BebidasId } />
          <Route exact path="/comidas/:id/in-progress" component={ ComidasProgress } />
          <Route exact path="/bebidas/:id/in-progress" component={ BebidasProgress } />
          <Route exact path="/explorar" component={ Explorar } />
          <Route exact path="/explorar/comidas" component={ ExplorarComidas } />
          <Route exact path="/explorar/bebidas" component={ ExplorarBebidas } />
          <Route
            exact
            path="/explorar/comidas/ingredientes"
            component={ ExplorarComidasIngredientes }
          />
          <Route
            exact
            path="/explorar/bebidas/ingredientes"
            component={ ExplorarBebidasIngredientes }
          />
          <Route exact path="/explorar/comidas/area" component={ ExplorarComidasArea } />
          <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
          <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
          <Route exact path="/explorar/bebidas/area" component={ NotFound } />
        </Switch>
      </ApiProvider>
    </div>
  );
}
