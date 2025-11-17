import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = data => {
    console.log(data);
    loginUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state || '/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white">
      <div className="py-5">
        <h1 className="text-4xl text-secondary font-black">Welcome Back!</h1>
        <p className="text-2xl">Login with ZapShift</p>
      </div>

      {/* Form is Here */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                {...register('email', { required: true })}
                className="input"
                placeholder="Email"
              />
              {errors.email?.type === 'required' && (
                <p className="text-red-500">Email is required</p>
              )}

              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/,
                })}
                className="input"
                placeholder="Password"
              />
              {errors.password?.type === 'required' && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === 'minLength' && (
                <p className="text-red-500">
                  Password must be 6 characters or longer
                </p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="text-red-500">
                  Password must be at least 6 characters and include uppercase,
                  lowercase, number, and special character.
                </p>
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p className="py-2">
              New to Zap Shift?{' '}
              <Link
                state={location?.state}
                to="/register"
                className="text-[#73863a] underline"
              >
                Register
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
