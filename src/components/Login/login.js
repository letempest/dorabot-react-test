import axios from 'axios';
import { useState } from 'react';

export const Login = () => {
  const [loginErr, setLoginErr] = useState(false);

  const loginHandler = async e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const response = await axios.post('/auth', { email, password });
      // should persist the result to context api or redux store, ignore here
      // check response
      if (!response.data[0].token) {
        throw new Error('failed to login');
      }

      // throw new Error('testing..');
    } catch (err) {
      console.error(err);
      setLoginErr(true);
      return;
    }

    // similar to register component, redirect
    window.location.href = '/home';
  };
  return (
    <div>
      {loginErr && <h2>something went wrong, please try again later!</h2>}
      <form onSubmit={e => loginHandler(e)}>
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
          <input type="submit" value={'Login!'}></input>
        </div>
      </form>
    </div>
  );
};
