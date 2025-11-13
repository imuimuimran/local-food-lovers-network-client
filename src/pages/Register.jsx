import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
  const { registerUser, updateUserProfile, googleSignIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async data => {
    const { name, email, password, confirm, photo } = data;

    if (password !== confirm) {
      toast.error('Passwords do not match!');
      return;
    }

    const passwordRules =
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRules.test(password)) {
      toast.error('Password must include uppercase, lowercase & be at least 6 characters!');
      return;
    }

    try {
      const result = await registerUser(email, password);
      await updateUserProfile(name, photo);
      // toast.success('Registration successful!');
      reset();
      navigate('/');
    } catch (err) {
      console.error(err);
      toast.error('Registration failed. Try again.');
    }
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword)
  }


  const handleGoogleSignup = async () => {
    try {
      await googleSignIn();
      toast.success('Signed in with Google!');
      navigate('/');
    } catch (err) {
      toast.error('Google sign-in failed.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="input input-bordered w-full"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="input input-bordered w-full"
              placeholder="Your email"
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Photo URL</label>
            <input
              type="url"
              {...register('photo', { required: 'Photo URL is required' })}
              className="input input-bordered w-full"
              placeholder="https://example.com/photo.jpg"
            />
            {errors.photo && (
              <p className="text-error text-sm mt-1">{errors.photo.message}</p>
            )}
          </div>

          <div className='relative'>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register('password', { required: 'Password is required' })}
              className="input input-bordered w-full"
              placeholder="Enter password"
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

          <div className='relative'>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register('confirm', { required: 'Confirm password' })}
              className="input input-bordered w-full"
              placeholder="Re-enter password"
            />
            <button 
                onClick={handleTogglePassword}
                className="btn btn-xs absolute bottom-2 right-3">
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
            {errors.confirm && (
              <p className="text-error text-sm mt-1">{errors.confirm.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-primary font-semibold hover:underline">
            Log In
          </Link>
        </p>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignup}
          className="btn btn-outline w-full flex items-center gap-2 justify-center"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
