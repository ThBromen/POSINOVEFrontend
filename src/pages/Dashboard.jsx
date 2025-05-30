import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className='text-center mt-10'>
      <h1 className='text-2xl'>Welcome, {user?.name}</h1>
      <button onClick={logout} className='mt-4 px-4 py-2 bg-red-500 text-white rounded'>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
