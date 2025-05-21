import React from "react";

export default function DifficultySelector({ onSelect }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Выбери уровень сложности</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => onSelect("easy")} style={buttonStyle}>
          Лёгкий
        </button>
        <button onClick={() => onSelect("medium")} style={buttonStyle}>
          Средний
        </button>
        <button onClick={() => onSelect("hard")} style={buttonStyle}>
          Сложный
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer"
};
