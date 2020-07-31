import React, {useEffect} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from "./page/shop/shop.component";
import SignInAndSignUp from "./page/sign-in-page/sign-in-and-sign-up.component";
import "./App.css";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./page/checkout/checkout.component";


const App = ({ checkUserSession, currentUser}) => {
 // unsubscribeFromAuth = null;


  useEffect(() => {

    checkUserSession();

  }, [checkUserSession])

  // componentDidMount() {
  //   //const { setCurrentUser } = this.props;

  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   //   if (userAuth) {
  //   //     const userRef = await createUserProfileDocument(userAuth);

  //   //     userRef.onSnapshot(snapShot => {
  //   //       setCurrentUser({
  //   //         id: snapShot.id,
  //   //         ...snapShot.data()
  //   //       });
  //   //     });
  //   //   } else {
  //   //     setCurrentUser(userAuth);

        
  //   //   }
  //  // });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  
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
              
               return currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)
              }
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
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
