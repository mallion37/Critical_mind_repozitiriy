// components/DifficultySelector.jsx

import React from "react";

const LEVELS = [
  { id: 1, label: "Лёгкий (3 цифры, 100 чисел, 500 с)" },
  { id: 2, label: "Средний (5 цифр, 100 чисел, 300 с)" },
  { id: 3, label: "Сложный (7 цифр, 100 чисел, 100 с)" },
  { id: 4, label: "Без ограничений (выбор подуровня)" },
];

export default function DifficultySelector({ onSelect }) {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Выберите уровень сложности</h2>
      <div className="space-y-2">
        {LEVELS.map((lvl) => (
          <button
            key={lvl.id}
            onClick={() => onSelect(lvl.id)}
            className="w-full py-2 px-4 border rounded hover:bg-gray-100"
          >
            {lvl.label}
          </button>
        ))}
      </div>
    </div>
  );
}
