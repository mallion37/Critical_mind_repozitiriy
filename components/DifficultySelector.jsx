import React from "react";

export default function DifficultySelector({ onSelect }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Выбери уровень сложности:</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => onSelect("easy")} style={{ marginRight: "10px" }}>
          Лёгкий
        </button>
        <button onClick={() => onSelect("medium")} style={{ marginRight: "10px" }}>
          Средний
        </button>
        <button onClick={() => onSelect("hard")}>
          Сложный
        </button>
      </div>
    </div>
  );
}
