const API_BASE_URL = 'http://localhost:5000/api/auth';


export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  return response.json();
  if (!response.ok) {
    throw new Error('Registration failed');
  }
  return response.json();
};


export const loginUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
};
