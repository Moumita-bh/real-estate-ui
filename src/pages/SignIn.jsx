import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
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
        <button className="w-full bg-gray-700 text-white p-2 rounded mb-4">
          SIGN IN
        </button>
        <button className="w-full bg-red-600 text-white p-2 rounded">
          CONTINUE WITH GOOGLE
        </button>
        <p className="text-center mt-4 text-blue-500">
          Don’t have an account?{' '}
          <Link to="/sign-up" className="underline text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
