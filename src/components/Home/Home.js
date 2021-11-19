import { useEffect, useState } from 'react';

export const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      setIsAuthenticated(true);
    }
    console.log(user);
  }, []);

  return (
    <div>
      <h1>hoem page</h1>
      <p>hey there, you are {!isAuthenticated ? 'not' : ''} authenticated.</p>
    </div>
  );
};
