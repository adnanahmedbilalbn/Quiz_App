import { getQuestions } from '../store/userSlice';


const fetchQuestionApi =  () => {
 
  return async (dispatch) => {

    

    try {
      const response = await fetch('/api/questions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        
        const {questions} = await response.json();

        dispatch(getQuestions(questions));
  
      } else {

        console.log("Error fetching")
  
      }
  
    } catch (error) {
      console.log(error);
    }
  }
  
  }
  
  export default fetchQuestionApi;