import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Decode token and set user (mock decoding, implement actual logic)
      const userFromToken = { username: 'testuser', role: 'User' }; // Extract from JWT
      setUser(userFromToken);
    }
  }, [token]);

  const login = (username, password) => {
    // Call your login API and handle authentication
    fetch('https://localhost:5039/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        localStorage.setItem('token', data.token);
        navigate('/albums'); // Redirect to albums page after login
      })
      .catch((error) => console.error('Login error:', error));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
