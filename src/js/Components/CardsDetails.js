import React, { Component } from "react";

class CardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {}
    };
  }

  componentDidMount() {
    this.fetchCard(
      `https://api.magicthegathering.io/v1/cards/${this.props.match.params.id}`
    );
  }

  fetchCard = url => {
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          card: data.card
        })
      );
  };

  render() {
    const { card } = this.state;

    return (
      <div className="card__details">
        <img className="card__image" src={`${card.imageUrl}`} />
        <ul className="card__info">
          <li>Name: {card.name}</li>
          <li>Rarity: {card.rarity}</li>
          <li>Type {card.types}</li>
          <li>Text: "{card.text}"</li>
        </ul>
      </div>
    );
  }
}

export default CardDetails;
