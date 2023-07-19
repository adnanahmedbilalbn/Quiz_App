import React, { useEffect, useState } from 'react';
import { signIn } from '../../../utils/userApi';

import '../style.css';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import fetchQuestionApi from '../../../utils/questionApi';

 const Form = () => {

  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const {isSignIn} = useSelector((state) => state.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
     
    if(isSignIn === true)
    {
      Navigate('/quiz')
    }
  },[isSignIn])

  const onChangeUserName = (e) =>{
    setUserName(e.target.value);
  }

  const onChangePassword= (e) =>{
    setPassword(e.target.value);
  }
  const handleClick = (e) =>{
    e.preventDefault();
    dispatch( signIn(userName, password));
      //  if(isSignIn === true)
      // {
      //   Navigate('/quiz')
      // }
      // useEffect(()=>{
        dispatch(fetchQuestionApi());
      // },[])
    console.log("signIn-Cliked");
    console.log(userName)
  }

  

  return (
    
    <div className="form-container">
    <form className='form'>
      <input name='userName' onChange={(e) => onChangeUserName(e)} type="text" placeholder="Username" autoComplete="off" />
      <input name='password'  onChange={(e) => onChangePassword(e)} type="password" placeholder="Password" autoComplete="off" />
      <input onClick={(e)  =>  handleClick(e)} type="submit" value="Log In" />
      
    </form>
  </div>
  )
}
export default Form;
