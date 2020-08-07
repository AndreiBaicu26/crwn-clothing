import React, {useEffect, lazy, Suspense} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";

const HomePage = lazy(()=>import('./page/homepage/homepage.component'))
const ShopPage = lazy(()=>import('./page/shop/shop.component'))
const SignInAndSignUp = lazy(()=>import('./page/sign-in-page/sign-in-and-sign-up.component'))
const CheckoutPage = lazy(()=>import('./page/checkout/checkout.component'))

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
        <GlobalStyle/>
        <Header />
        <Switch>
          <Suspense fallback ={<Spinner/>}>
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
          </Suspense>
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
