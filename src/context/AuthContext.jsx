import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (data) => {
    try {
      const res = await axios.post('/api/auth/login', data, { withCredentials: true });
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      setUser(null);
      throw error;
    }
  };

  const register = async (data) => {
    try {
      const res = await axios.post('/api/auth/register', data, { withCredentials: true });
      setUser(res.data.user);
      return res.data;
    } catch (error) {
      setUser(null);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout', {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('/api/auth/dashboard', { withCredentials: true });
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false); // Ensure loading is set to false after the check
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
