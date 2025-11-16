import React from 'react';

const Login = () => {
  return (
    <div className="bg-white">
      <div className='py-5'>
        <h1 className="text-4xl text-secondary font-black">Welcome Back!</h1>
        <p className="text-2xl">Login with ZapShift</p>
      </div>
      <form>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;