import React from "react";

function Card({ id, name, email }) {
  return (
    <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Jane Doe" src={`https://www.robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
