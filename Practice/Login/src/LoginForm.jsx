import React, { useState } from 'react';
// 1. Image ko yahan import kiya
import myImage from './bg-image.jpg'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 2. Form submit hone par chalne wala function
  const handleSubmit = (e) => {
    e.preventDefault(); // Page refresh rokne ke liye
    
    console.log("Submit button click ho gaya!");
    console.log("User ka Email:", email);
    console.log("User ka Password:", password);

  };

  return (
    // 3. Poore page par bg img lagane ke liye main div ki styling
    <div style={{ 
      backgroundImage: `url(${myImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      padding: '50px', 
      height: '100vh', 
      textAlign: 'center' 
    }}>
      
      <h2 style={{ color: 'white', textShadow: '2px 2px 4px #000000' }}>Login Form</h2>
      
      {/* 4. Form ko submit handle karne ko diya aur form ka apna ek chhota background set kiya */}
      <form onSubmit={handleSubmit} style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.85)', 
        padding: '30px', 
        display: 'inline-block', 
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
      }}>
        
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          style={{ padding: '10px', margin: '10px 0', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <br />
        
        <input 
          type="password" 
          placeholder="Enter Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          style={{ padding: '10px', margin: '10px 0', width: '200px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <br />
        
        <button type="submit" style={{ 
          padding: '10px 20px', 
          marginTop: '15px', 
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
        width: '100%' 
        }}>
          Login
        </button>
        <p style={{ marginTop: '20px', color: 'white', fontSize: '14px', textAlign: 'center' }}>
          Don't have an account? {' '}
          <span 
            style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline', fontWeight: 'bold' }}
            onClick={() => alert("Register component yahan attach hoga dost ka code aane ke baad!")}
          >
            Register here
          </span>
        </p>
      </form>
      
    </div>
  );
}

export default LoginForm;
