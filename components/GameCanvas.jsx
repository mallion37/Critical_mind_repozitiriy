import React, { useEffect } from "react";

export default function GameCanvas({ difficulty, onFinish }) {
  useEffect(() => {
    alert(`Игра началась! Уровень сложности: ${difficulty}`);
    
    const timer = setTimeout(() => {
      alert("Игра завершена!");
      onFinish();
    }, 3000); // Эмуляция окончания игры через 3 секунды

    return () => clearTimeout(timer);
  }, [difficulty, onFinish]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Игровое поле — уровень: {difficulty}</h2>
      <p>Здесь будет ваше игровое полотно</p>
    </div>
  );
}
