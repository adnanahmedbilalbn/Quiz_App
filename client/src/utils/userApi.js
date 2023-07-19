import { signInRequest, signInSuccess, signInFailure } from '../store/userSlice';

export const signIn = (userName, password) => {
  return async (dispatch) => {

    dispatch(signInRequest());

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        body: JSON.stringify({ userName, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        
        const user = await response.json();
        dispatch(signInSuccess(user));

      } else {
        const error = await response.text();
        dispatch(signInFailure(error));
      }

    } catch (error) {
      dispatch(signInFailure('An error occurred during sign-in'));
    }
  };
};
