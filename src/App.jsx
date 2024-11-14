import React, { useState } from 'react';
import './App.css';
import questions from './questions';
import Result from './components/Result';
import QuestionBox from './components/QuestionBox';
import Darkbutton from './components/Darkbutton';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  // TASK 1: Complete this function to handle when the user selects an option.
  // Increment the score if the selected option is correct, and move to the next question.
  const optionClick = (isCorrect) => {
    console.log('Option clicked:', isCorrect);

    // Increment score if the answer is correct
    if(isCorrect){
      setScore(prev=>prev+1)
    }
    // Move to the next question
    setCurrentQuestion(prev=>prev+1)
  };

  // TASK 2: Write the logic to restart the quiz when this function is called.
  const restartQuiz = () => {
    // Reset score and current question
    setScore(0)
    setCurrentQuestion(0)
  };

  return (
    <div>
      <h3>Score: {score}</h3>
      {currentQuestion < questions.length ? (
        <>
          <Darkbutton />
          <QuestionBox
            questions={questions}
            query={currentQuestion}
            selectchoice={optionClick}
          />
        </>
      ) : (
        <Result
          score={score}
          len={questions.length}
          restartQuiz={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;
