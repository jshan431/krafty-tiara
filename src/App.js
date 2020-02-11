import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import ContactPage from './pages/contact/contact.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }
  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
