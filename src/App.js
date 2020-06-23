import React from "react";
import Movies from "./components/movies";
import Customers from "./components/navBar/customers";
import Rentals from "./components/navBar/rentals";
import NavBar from "./components/navBar/navbar";
import MovieForm from "./components/movieForm";
import Register from "./components/register";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/movieForm/new" component={MovieForm} />
        <Route path="/register" component={Register} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Redirect from="/" exact to="/movies" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
