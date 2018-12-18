import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../sass/main.scss";
import { Cards, CardsDetails, Navbar, Search } from "../Components/index"
import { filterByColor } from "../utils/index"

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      color: "",
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
          cards: data.cards,
        })
      );
  };

  handleColorChange = event => {
    this.setState({ color: event.target.value });
  }

  render() {
    const { color, cards, isLoading } = this.state;

    return (
      <div className="interface">
        <Navbar />
        <Search color={color} handleColorChange={this.handleColorChange} />
        <Switch>
          <Route
            path="/details/:id"
            component={CardsDetails}
          />
          <Route
            path="/"
            render={props => <Cards cards={filterByColor(cards, color)} loading={isLoading} {...props} />}
          />
        </Switch>
      </div >
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
