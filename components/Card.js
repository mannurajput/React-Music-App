import React from "react";
function Card(props) {
  return (
    <>
      <div className="card" id={`${props.data.cardId}`}>
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
