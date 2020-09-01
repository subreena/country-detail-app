import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import CoutryDetails from "./Components/Country/CountryDetails/CoutryDetails";
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  return (
    <>
    <Router>
      <Switch>
      <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/name/:countryName">
          <CoutryDetails></CoutryDetails>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
         <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
