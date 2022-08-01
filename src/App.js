import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [rememberMe, setRememberMe] = useState(false);
  let [emailIsValid, setEmailIsValid] = useState(false);
  let [passwordIsValid, setPasswordIsValid] = useState(false);
  let [isSubmitted, setIsSubmittes] = useState(false);

  const handleEmailChange = (e) => {
  const value =  e.target.value
  const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  const isValide = regEx.test(value)
  setEmailIsValid (emailIsValid = isValide)
  // console.log(emailIsValid)
  setEmail (email =value)
  // console.log(email)

  

  };

   const handlePasswordChange = (e) => {
    // console.log(e)
    const value = e.target.value
    const isValid = value.length > 5
    setPassword(password=value)
    // console.log(password)
    setPasswordIsValid(passwordIsValid= isValid)
    // console.log(passwordIsValid)

    
    

   }

  

 

 

   const handleRememberMeChange = (e) => {
    
   const setrememberMe = e.target.checked
   setRememberMe(e.target.checked)
   console.log(rememberMe)

   }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    
    const allIsVallid = (emailIsValid && passwordIsValid)
    setIsSubmittes  (allIsVallid)
    console.log(isSubmitted)
  };
  

  return (
    <form className="container mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleEmailChange} 
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handlePasswordChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={handleRememberMeChange}
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};
export default App;
