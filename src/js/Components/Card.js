import React from "react";

const Card = ({ cards }) => {
  if (cards) {
    return (
      <div className="cards-grid__container">
        {cards.map(card => {
          return (
            <div className="card" key={`${card.id}`}>
              <img src={`${card.imageUrl}`} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default Card;
