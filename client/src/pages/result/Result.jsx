import React from 'react';
import './style.css'; // Import the CSS file for styling
import { useSelector } from 'react-redux';


function ResultPage() {

  const {selectedAnswers} = useSelector((state) => state.user);
  const {questions} = useSelector((state) => state.user);

  const calculateScore = () => {

      console.log(questions);
      console.log(selectedAnswers);

    let score = 0;

    for (let i = 0; i < questions.length; i++) {

      console.log((questions[i].correctAnswer));
      console.log((selectedAnswers[i]));

      if (questions[[i].correctAnswer] == selectedAnswers[i]) {

        console.log(true)
        if(selectedAnswers[i] === 'undefined')
        {
          score --;
        }
        else{
          score++;
        }

      }
      else{
        console.log(false)
      }
    }
    return score;
  };

  const score = calculateScore();
  const totalQuestions = questions.length;

  return (
    <div className="result-page">
      <h1 className="result-title">Quiz Result</h1>
      <div className="score-container">
        <p className="score">You scored</p>
        <p className="score">{score}</p>
        <p className="score">out of {totalQuestions}</p>
      </div>
    </div>
  );
}

export default ResultPage;
