import React, { Component } from "react";
import { render } from "react-dom";
import "../../sass/main.scss";
import Card from "../Components/Card";

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

    console.log(cards);

    return (
      <div>
        {cards.length > 0 && (
          <React.Fragment>
            <Card cards={cards} />
          </React.Fragment>
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
