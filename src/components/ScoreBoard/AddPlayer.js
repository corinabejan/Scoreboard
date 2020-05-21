import React, { useState } from "react";
import './AddPlayer.scss';

export default function AddPlayer(props) {
  const [name, set_name] = useState("");

  function submitPlayer(event) {
    event.preventDefault();
    props.createPlayer(name);
    set_name("");
  }

  return (
    <form>
      <label>New Player</label>
      <input
        value={name}
        onChange={event => {
          set_name(event.target.value);
        }}
        type="text"
        placeholder="name"
      ></input>
      <button onClick={submitPlayer}>ADD PLAYER</button>
    </form>
  );
}
