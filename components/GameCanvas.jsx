import React from "react";

export default function GameCanvas({ difficulty, onFinish }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Игра началась!</h2>
      <p>Сложность: {difficulty}</p>
      <button onClick={onFinish} style={{ marginTop: "20px" }}>
        Завершить игру
      </button>
    </div>
  );
}
