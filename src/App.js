import React from 'react';

export default function App() {
  const handleLogin = () => {
    // this goes to your Spring Boot, which then 302→Google
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Mosaic Store</h1>
      <button onClick={handleLogin}>
        🔐 Sign in with Google
      </button>
    </div>
  );
}
