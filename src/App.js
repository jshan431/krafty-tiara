import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contact.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    //store state of our user in our app
    this.state = {
      currentUser : null
    }
  }

  //new method set to null
  unsubscribeFromAuth = null;

  // how we handle our application being aware of auth changes on firebase
  componentDidMount() {
    // listen for any on auth state changes. When there is one it will fire a function for us
    // listen for auth status changes
    // when user logs in we get the user as a param
    // when the user logs out, it becomes null
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()    //get actual properites on object using .data() (displayName, email, createdAt)
            }
          });
        });
      }
      else{
        // equivalent to setting currentUser to null
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    //close our subscriptions to prevent memory leak
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
