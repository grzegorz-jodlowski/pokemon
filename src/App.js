import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { HomePage } from './components/views/HomePage/HomePage';
import { PokemonPage } from './components/views/PokemonPage/PokemonPage';


function App() {

  return (
    <MainLayout>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
        <Route exact path={`${process.env.PUBLIC_URL}/pokemons/:id`} component={PokemonPage} />
      </Switch>
    </MainLayout>
  );
}

export default App;
