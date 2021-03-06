import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ cards, loading }) => {

  if (loading) return (<h1>Loading...</h1>)

  return (
    <div className="cards-grid__container">
      {cards.map(card => {
        return (
          <div className="card" key={`${card.id}`}>
            <Link to={`/details/${card.id}`}>
              <img src={`${card.imageUrl}`} />
            </Link>
          </div>
        );
      })}
    </div>
  );

};

export default Cards;
