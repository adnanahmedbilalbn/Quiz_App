import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSelectedAnswers } from '../../../store/userSlice';

export const Question = ({questions}) => {





  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
  const [isChecked, setCheck] = useState(null);


  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAnswerSelection = (event) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = event.target.value;
    setSelectedAnswers(newSelectedAnswers);
  };



  const handleNextQuestion = () => {

    if( currentQuestionIndex === questions.length - 1){
      console.log("quesionsComplete");
      console.log(selectedAnswers)
      dispatch(getSelectedAnswers(selectedAnswers));
      Navigate('/result');
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

  };

  try{

    return (

          <div>
            <h1 className="question"> Q : {currentQuestion?.question}</h1>
            <div className="options-container">
              {currentQuestion.answers.map((answer, index) => (
                <div className="option" key={index}>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name={`question${currentQuestionIndex}`}
                    // checked={false}
                    value={index}
                    onChange={handleAnswerSelection}

                  />
                  <label htmlFor={`option${index}`}>{answer}</label>
                </div>
              ))}
            </div>
             <div className="button-container">
                <button className="next-button" onClick={handleNextQuestion}>Next</button>
            </div>
        </div>

      )
  }
  catch(e){
    console.log(e); 
  }
}



// import React, { useEffect, useState } from 'react';
// import Timer from './timer/Timer';
// import { Question } from './Q&A/Question';
// import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
// import './style.css';
// import {useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';


// function Quiz() {
//   const {questions} = useSelector((state) => state.user);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     console.log(selectedAnswers)

//   };

//   const handleAnswerSelection = (event) => {
//     const newSelectedAnswers = [...selectedAnswers];
//     newSelectedAnswers[currentQuestionIndex] = event.target.value;
//     setSelectedAnswers(newSelectedAnswers);
//   };

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div>
//       <h1 className="question">{currentQuestion?.question}</h1>
//       <div className="options-container">
//         {currentQuestion?.answers?.map((answer, index) => (
//           <div className="option" key={index}>
//             <input
//               type="radio"
//               id={`option${index}`}
//               name={`question${currentQuestionIndex}`}
//               value={answer}
//               checked={selectedAnswers[currentQuestionIndex] === answer}
//               onChange={handleAnswerSelection}
//             />
//             <label htmlFor={`option${index}`}>{answer}</label>
//           </div>
//         ))}
//       </div>
//       <button onClick={handleNextQuestion}>Next</button>
//     </div>
//   );
// }

// export default Quiz;
