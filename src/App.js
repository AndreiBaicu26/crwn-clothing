import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import SignInAndSignUp from "./page/sign-in-page/sign-in-and-sign-up.component";
import "./App.css";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser, checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./page/checkout/checkout.component";


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {


    const { checkUserSession} = this.props;
    checkUserSession();
    //const { setCurrentUser } = this.props;

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);

        
    //   }
   // });
  }



  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              {
              
               return this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)
              }
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,

}
);

const mapDispatchtoProps = dispatch => 
{
  return {
   // setCurrentUser: (user) => dispatch(setCurrentUser(user))
   checkUserSession: ()=> dispatch(checkUserSession())
  }
};

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
