import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../sass/main.scss";
import Cards from "../Components/Cards";
import CardsDetails from "../Components/CardsDetails";
import Navbar from "../Components/Navbar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    this.fetchCards(`https://api.magicthegathering.io/v1/cards?page=1`);
  }

  fetchCards = url => {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          cards: data.cards
        })
      );
  };

  render() {
    const { cards } = this.state;

    return (
      <div className="interface">
        <Navbar />
        <Switch>
          <Route
            path="/details/:id"
            render={props => <CardsDetails {...props} />}
          />
          <Route
            path="/"
            render={props => <Cards cards={cards} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
