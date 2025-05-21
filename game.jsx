import React, { useState } from "react";
import DifficultySelector from "../components/DifficultySelector";
import GameCanvas from "../components/GameCanvas";

export default function GamePage() {
  const [difficulty, setDifficulty] = useState(null);

  return (
    <>
      {!difficulty ? (
        <DifficultySelector onSelect={setDifficulty} />
      ) : (
        <GameCanvas
          difficulty={difficulty}
          onFinish={() => setDifficulty(null)}
        />
      )}
    </>
  );
}
