import { Link } from 'react-router-dom';

const Home = () => (
  <div className='text-center mt-10'>
    <h1 className='text-3xl mb-4'>Welcome to Auth App</h1>
    <Link className='text-blue-600 underline' to='/login'>Login</Link> or
    <Link className='text-blue-600 underline ml-2' to='/register'>Register</Link>
  </div>
);

export default Home;
