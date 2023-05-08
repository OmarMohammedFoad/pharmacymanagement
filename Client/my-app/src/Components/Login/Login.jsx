import React, { useState } from 'react'
import axios from 'axios';
 import  "./Login.css";
 import { useNavigate } from 'react-router-dom';
 function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate()
  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const Checkemail = async (Name,pass) => {
    try {
      const response = await axios.post('http://localhost:3000/employee', { Name:Name,pass:pass });
        console.log(response.data);
      if (response.data) {
        if(response.data[0].Name === Name){
          navigate("/home",{replace:true}) 
          return true
           }
        else
        {
         return false
        }
      } else {
        // Incorrect login credentials
        console.log('Invalid login credentials');
      }
    } catch (error) {
      console.error(error);
    }
  };


  function handleLogin(event) {
    event.preventDefault(); // Prevent form submission
     Checkemail(username,password)
    
    // ... Do login logic here
  }

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
