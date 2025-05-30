import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';  // Fixed import here
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';  

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

const { user, loading } = useAuth();
if (loading) return <div>Loading...</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);  // Use registerUser here
      navigate('/login');        // Assuming '/login' is the correct login route
    } catch (error) {
      // Handle error, optionally add error state and display it here
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
      <h2 className="text-xl mb-4">Register</h2>
      <Input
        label="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <Input
        label="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <Input
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button>Register</Button>
    </form>
  );
};

export default Register;
