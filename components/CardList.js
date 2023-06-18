import React from "react";
import Card from "./Card";

function CardList({ data }) {
  return (
    <div>
      {data.map((cardData) => (
        <Card key={cardData.cardId} data={cardData} />
      ))}
    </div>
  );
}

export default CardList;
