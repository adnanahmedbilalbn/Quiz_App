
import React, { useEffect } from 'react';
import Timer from './timer/Timer';
import { Question } from './Q&A/Question';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import './style.css';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {

  const {isSignIn} = useSelector((state) => state.user);
  const {questions} = useSelector((state) => state.user);
  const Navigate = useNavigate();
  
  useEffect(() => {
    if(!isSignIn)
    {
      Navigate('/')
    }
  },[])

  return (
    <ContentWrapper>
      <div className="page-container">
        <Timer />
        <Question questions={questions} />
      </div>
    </ContentWrapper>
    
  );
};

export default Quiz;





