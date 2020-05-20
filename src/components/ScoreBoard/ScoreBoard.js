import React, { useState } from "react";
import Player from "../Player/Player";
import AddPlayer from "./AddPlayer";

export default function ScoreBoard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);
  const [sort_by, set_sort_by] = useState("score");

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
    console.log(event.target.value);
    if (sort_by === "score") {
      players.sort((a, b) => b.score - a.score);
    }

    if (sort_by === "name") {
      players.sort((a, b) => ("" + a.name).localeCompare(b.name));
    }
  };

  function createPlayer(name) {
    console.log("HELLO AM I BEING CALLED?? AND WHAT IS NAME", name);
    const newPlayer = { name: name, score: 0, id: players.length + 1 };

    const newPlayers = [...players, newPlayer];
    console.log(newPlayers);
    set_players(newPlayers);
  }

  const incrementScore = (event) => {
    const new_players_array = players.map((player) => {
      if (player.id === event) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    set_players(new_players_array);
  };

  return (
    <div className="Scoreboard">
      <h4>Players's score</h4>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="name">Sort by score</option>
          <option value="score">Sort by name</option>
        </select>
      </p>
      <AddPlayer createPlayer={createPlayer} />
      {players.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScore={incrementScore}
        />
      ))}
    </div>
  );
}
