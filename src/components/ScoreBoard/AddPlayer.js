import React, { useState } from "react";

export default function AddPlayer(props) {
  const [name, set_name] = useState("");

  function submitPlayer(event) {
    event.preventDefault();
    console.log("WHAT IS MY NAME?", name);
    props.createPlayer(name);
    set_name("");
  }

  return (
    <div className="AddPlayerForm">
      <p>
        New player:{" "}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            set_name(event.target.value);
          }}
        />
        <button onChange={submitPlayer}>Add</button>
      </p>
    </div>
  );
}
