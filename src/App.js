import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
function App() {
  const[{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only be called when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ' ,authUser);

      if(authUser){
        //the user is logged in/ the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //if the user is not logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    //BEM convention
    <Router>
      <div className="app"> 
      
      <Switch>
        <Route path = "/login">
          <Login />
        </Route>
        <Route path="/checkout" exact>
          <Header />
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
