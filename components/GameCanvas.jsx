import React, { useState, useEffect } from "react";

export default function GameCanvas({ difficulty, onFinish }) {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    generateQuestion();
  }, [difficulty]);

  function generateQuestion() {
    const a = Math.floor(Math.random() * 10 * difficulty);
    const b = Math.floor(Math.random() * 10 * difficulty);
    setQuestion({ a, b, correct: a + b });
    setAnswer("");
    setFeedback("");
  }

  function checkAnswer() {
    if (parseInt(answer) === question.correct) {
      setFeedback("✅ Верно!");
      setTimeout(() => {
        generateQuestion();
      }, 1000);
    } else {
      setFeedback("❌ Неверно, попробуй снова.");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {question && (
        <>
          <h2>Сколько будет {question.a} + {question.b}?</h2>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{ padding: "8px", fontSize: "16px" }}
          />
          <br />
          <button onClick={checkAnswer} style={{ marginTop: "10px", padding: "10px 20px" }}>
            Ответить
          </button>
          <p>{feedback}</p>
          <button onClick={onFinish} style={{ marginTop: "20px" }}>Завершить</button>
        </>
      )}
    </div>
  );
}
