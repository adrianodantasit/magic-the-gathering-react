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
      <div>
        <ul>
          <li>{card.name}</li>
          <li>{card.rarity}</li>
          <li>{card.types}</li>
          <li>{card.text}</li>
          <li>
            <img src={`${card.imageUrl}`} />
          </li>
        </ul>
      </div>
    );
  }
}

export default CardDetails;
