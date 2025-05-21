import React, { useState, useEffect } from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  },
  question: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  timer: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  dial: (color) => ({
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    background: color,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gap: "10px",
    padding: "10px",
    boxSizing: "border-box",
    transition: "background 0.3s",
  }),
  button: {
    fontSize: "20px",
    borderRadius: "50%",
    border: "none",
    width: "60px",
    height: "60px",
    cursor: "pointer",
  },
  centerButton: {
    gridColumn: 2,
    gridRow: 2,
    alignSelf: "center",
    justifySelf: "center",
  },
};

function getDigitalRoot(n) {
  return ((n - 1) % 9) + 1;
}

function generateQuestion(difficulty) {
  let a, b;
  if (difficulty === "easy") {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;
  } else if (difficulty === "medium") {
    a = Math.floor(Math.random() * 50) + 10;
    b = Math.floor(Math.random() * 50) + 10;
  } else {
    a = Math.floor(Math.random() * 900) + 100;
    b = Math.floor(Math.random() * 900) + 100;
  }

  const correct = getDigitalRoot(a + b);
  return { question: `${a} + ${b}`, correct };
}

export default function GameCanvas({ difficulty, onFinish }) {
  const [questionData, setQuestionData] = useState(generateQuestion(difficulty));
  const [feedbackColor, setFeedbackColor] = useState("lightgray");
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setFeedbackColor("lightcoral");
          setTimeout(() => {
            setFeedbackColor("lightgray");
            setQuestionData(generateQuestion(difficulty));
            setTimer(5);
          }, 300);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [questionData]);

  const handleAnswer = (value) => {
    const isCorrect = value === questionData.correct;
    setFeedbackColor(isCorrect ? "lightgreen" : "lightcoral");
    setTimeout(() => {
      setFeedbackColor("lightgray");
      setQuestionData(generateQuestion(difficulty));
      setTimer(5);
    }, 300);
  };

  const dialNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div style={styles.container}>
      <div style={styles.question}>Цифровой корень: {questionData.question}</div>
      <div style={styles.timer}>⏳ Осталось: {timer} сек</div>
      <div style={styles.dial(feedbackColor)}>
        {dialNumbers.map((num) => (
          <button
            key={num}
            style={styles.button}
            onClick={() => handleAnswer(num)}
          >
            {num}
          </button>
        ))}
        <button
          style={{ ...styles.button, ...styles.centerButton }}
          onClick={() => handleAnswer(9)}
        >
          9
        </button>
      </div>
    </div>
  );
}
