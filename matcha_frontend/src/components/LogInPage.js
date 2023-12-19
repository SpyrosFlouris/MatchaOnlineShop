import React, { useState } from 'react';

const LogInPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

function Back(){
  window.location.reload()
  }

  return (
    <div className="login-container">

      <header>
        <h1>Matcha Tea Heaven</h1>
        <p>Your source for premium matcha tea and more ☕︎</p>
        <div className="login-button">
            <button className="button" onClick={Back}>Back</button>
          </div>
      </header>

      <div className="login-form">

        <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>

        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          {isSignUp && (
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
          )}

          <button className="button" type="submit">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p onClick={toggleForm} className="toggle-form">
          {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
        </p>
      </div>

    </div>
  );
};

export default LogInPage;