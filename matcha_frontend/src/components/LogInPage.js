import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogInPage = ({ onLogin }) => {
  const navigate = useNavigate()
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  function Back() {
    navigate('/')
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(8).required(),
    ...(isSignUp && {
      confirmpassword: Yup.string().min(8).required(),
      email: Yup.string().required(),
    }),
  });

  return (
    <div className="login-container">
      <header>
        <h1>Matcha Tea Heaven</h1>
        <p>Your source for premium matcha tea and more ☕︎</p>
        <div className="login-button">
          <button className="button" onClick={Back}>
            Back
          </button>
        </div>
      </header>

      <div className="login-form">
        <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>

          <Formik
            initialValues={{
              username: '',
              password: '',
              confirmpassword: '',
              email: '',
            }}
            onSubmit={(values) => {
              if (isSignUp) {
                // Handle signup logic
                console.log("inside if isSignUp");
                axios.post("http://localhost:3001/users", values)
                  .then((response) => {
                    console.log("Registration successful");
                    // Optionally, you can automatically log in the user after registration
                    onLogin({username:values.username, items: []}); // Pass the users data to parent

                    setisLoggedIn(true);
                    navigate('/')
                  })
                  .catch((error) => {
                    console.error("Registration failed", error);
                  });
              } else {
                // Handle login logic
                console.log("inside else for login");
                axios.post("http://localhost:3001/login", values)
                  .then((response) => {
                    console.log("Login successful");
                    onLogin({username:values.username, items: []}); // Pass the username to the parent component

                    setisLoggedIn(true);
                    navigate('/')
                  })
                  .catch((error) => {
                    console.error("Login failed", error);
                  });
              }
            }}
            validationSchema={validationSchema}
          >
            <Form>
              <label htmlFor="username">Username:</label>
              <ErrorMessage name="username" component="div" className="error" />
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="username"
              />

              <label htmlFor="password">Password:</label>
              <ErrorMessage name="password" component="div" className="error" />
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />

              {isSignUp && (
                <>
                  <label htmlFor="confirmpassword">Confirm Password:</label>
                  <ErrorMessage name="confirmpassword" component="div" className="error" />
                  <Field
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    placeholder="Confirm password"
                  />

                  <label htmlFor="email">Email:</label>
                  <ErrorMessage name="email" component="div" className="error" />
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email@you.com"
                  />
                </>
              )}

              <button className="button" type="submit">
                {isSignUp ? 'Sign Up' : 'Log In'}
              </button>
            </Form>
          </Formik>

        <p onClick={toggleForm} className="toggle-form">
          {isSignUp
            ? 'Already have an account? Log In'
            : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
