import React, { Component } from "react";

class CardDetails extends Component {
  state = { loading: true };


  componentDidMount() {
    this.fetchCard(
      `https://api.magicthegathering.io/v1/cards/${this.props.match.params.id}`
    );
  }

  fetchCard = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.card.name,
          imageUrl: data.card.imageUrl,
          rarity: data.card.rarity,
          text: data.card.text,
          loading: false
        })
      });
  };

  /* 
  subTypesArr = () => {
    let subTypes;
    let arr = this.state.card.subtypes;
    if (Array.isArray(arr)) {
      subTypes = arr.join(", ");
    } else {
      subTypes = arr;
    }
    return subTypes;
  }
  */

  render() {
    const { imageUrl, name, rarity, text, loading } = this.state;

    if (loading) {
      return (<h1>Loading...</h1>)
    }


    return (
      <div className="card__details">
        <img className="card__image" src={`${imageUrl}`} />
        <ul className="card__info">
          <li>Name: {name}</li>
          <li>Rarity: {rarity}</li>
          <li>Text: "{text}"</li>
        </ul>
      </div>
    );
  }
}

export default CardDetails;
