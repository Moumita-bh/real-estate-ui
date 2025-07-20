import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add sign-up logic here
    navigate('/welcome'); // Navigate to a new page on sign-up
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-gray-700 text-white p-2 rounded mb-4"
          onClick={handleSignUp}
        >
          SIGN UP
        </button>
        <button className="w-full bg-red-600 text-white p-2 rounded">
          CONTINUE WITH GOOGLE
        </button>
        <p className="text-center mt-4 text-blue-500">
          Have an account? 
          <Link to="/sign-in" className="underline text-blue-700">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;