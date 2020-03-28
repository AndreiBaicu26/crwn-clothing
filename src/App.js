import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import './App.css';




function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route patch ='/shop' component = {ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
