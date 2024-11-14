import React from 'react';

const Result = ({ score, len, restartQuiz }) => {
  const percentage = (score / len) * 100;
  return (
    <div className="result-box">
      <h2>Quiz Completed!</h2>
      {/* Task 5.1: Display the score with the total number of questions */}
      <p>Your Score: {score} / {len}</p>
      {/* Task 5.2: Display a custom message based on the user's score:
          - If the percentage is greater than 50%, show "Great job!"
          - If the percentage is 50% or less, show "Better luck next time!"*/}
      <p>{(percentage>50)?"Great job!":"Better luck next time!"}</p>
      <button className="restart-btn" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
