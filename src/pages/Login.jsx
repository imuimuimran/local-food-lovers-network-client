import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const { loginUser, googleSignIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      await loginUser(data.email, data.password);
      toast.success('Login successful!');
      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.error(err);
      toast.error('Invalid email or password!');
    }
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      toast.success('Logged in with Google!');
      navigate(redirectPath, { replace: true });
    } catch (err) {
      toast.error('Google login failed.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Log In to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className='relative'>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register('password', { required: 'Password is required' })}
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
            <button 
                onClick={handleTogglePassword}
                className="btn btn-xs absolute bottom-2 right-3">
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            {errors.password && (
              <p className="text-error text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Log In
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary font-semibold hover:underline">
            Signup
          </Link>
        </p>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full flex items-center gap-2 justify-center"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
