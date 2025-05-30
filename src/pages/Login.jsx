import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const { login, user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;
  if (user) navigate('/dashboard');
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(form); 
      navigate('/dashboard'); 
    } catch (err) {
      console.error('Login error:', err);

      if (err.response && err.response.status === 401) {
        setError('Invalid email or password.');
      } else {
        setError('Login failed. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <h2 className="text-xl mb-4 font-semibold">Login</h2>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      <Input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />

      <Button type="submit" className="w-full mt-4">Login</Button>
    </form>
  );
};

export default Login;
