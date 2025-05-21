import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Добро пожаловать в Critical Mind!</h1>
      <p>Готов сыграть и проверить свои навыки?</p>
      <Link href="/game">
        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Начать игру
        </button>
      </Link>
    </div>
  );
}
