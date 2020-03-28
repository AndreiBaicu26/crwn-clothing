import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUp from './page/sign-in-page/sign-in-and-sign-up.component'
import './App.css';
import Header from './components/header/header.component';




function App() {
  return (
    <div className="App">
    <Header/>
      <Switch>
        <Route exact path ='/' component = {HomePage}/>
        <Route path ='/shop' component = {ShopPage}/>
        <Route path ='/signin' component = {SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
