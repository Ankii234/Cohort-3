import React, { useState } from 'react';

const LoginForm = () => {
  // 1. Yahan humne do state variables banaye (email aur password)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Login Form</h2>
      <form>
        {/* 2. Email input ko state se connect kiya */}
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <br /><br />
        
        {/* 3. Password input ko state se connect kiya */}
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <br /><br />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
