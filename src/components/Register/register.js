import { Fragment, useState } from 'react';
import axios from 'axios';

export const Register = () => {
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [registerReturnErr, setRegisterReturnErr] = useState(false);

  const registerHandler = async e => {
    e.preventDefault();
    // retrieve register input
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password);

    // ensure that user provides an unique email
    // assume that we make an http request to /users
    // in {id: string, email: string}[] format
    const allUsers = await axios.get('/users').data;
    const hasDuplicate = allUsers.find(u => u.email === email);
    if (hasDuplicate) {
      // UI alert and error handling...
      setIsInvalidInput(true);
    }

    // create new user
    try {
      const newUser = await axios.post('/users', { email, password }).data;

      // persist to localStorage temporarily
      localStorage.removeItem('currentUser');
      localStorage.setItem('currentUser', newUser);

      // // no api to play with, testing locally
      // localStorage.clear();
      // localStorage.setItem('currentUser', { email, id: '123' });
    } catch (err) {
      console.error(err);
      setRegisterReturnErr(true);
      return;
    }

    // upon success, redirect to /home route, and mutate 'isAuthenticated' state
    window.location.href = '/home';
  };

  return (
    <Fragment>
      {isInvalidInput && <div>Invalid Input!!! Please double check!</div>}
      {registerReturnErr && (
        <div>Fail to register, please try again later!</div>
      )}
      <form onSubmit={e => registerHandler(e)}>
        <div>
          <label htmlFor="email" name="email">
            Email:{' '}
          </label>
          <input type="email" name="email" id="email" required></input>
        </div>
        <div>
          <label htmlFor="password" name="password">
            Password:{' '}
          </label>
          <input type="password" name="password" id="password" required></input>
        </div>
        <div>
          <input type="submit" value={'register!'}></input>
        </div>
      </form>
    </Fragment>
  );
};
