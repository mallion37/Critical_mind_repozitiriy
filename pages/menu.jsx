import React from "react";
import Link from "next/link";

export default function MainMenu() {
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Выберите режим игры</h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center"
      }}>
        <Link href="/training"><button>Тренировка</button></Link>
        <Link href="/tournament"><button>Турнир</button></Link>
        <Link href="/leaderboard"><button>Турнирная таблица</button></Link>
      </div>
    </div>
  );
}
