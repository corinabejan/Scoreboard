import React from "react";
import './Player.scss';

export default function Player(props) {
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    props.incrementScore(props.id);
    console.log('is this props: ', props.id)
  };

  return (
    <div>
      <ul>
        <li className="Player">{`${props.name} (score: ${props.score})`}</li>
        <div
        className="percentage_coloring"
        style={{ width: props.score + "%" }}
      />
        <button onClick={onClickIncrement}>increment</button>
      </ul>
    </div>
  );
}
