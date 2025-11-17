import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = data => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        //1. store the image in form data
        const formData = new FormData();

        // 2. send the photo to store and get the photo url (using imgBB)
        formData.append('image', profileImg);
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;

        axios.post(image_API_URL, formData).then(res => {
          // console.log('after image upload', res.data.data.url);

          // update user profile to firebase
          const updateProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };

          updateUserProfile(updateProfile)
            .then(() => {
              navigate(location?.state || '/');
            })
            .catch(error => {
              console.log(error);
            });
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="bg-white">
      <div className="py-5">
        <h1 className="text-4xl text-secondary font-black">
          Create an Account!
        </h1>
        <p className="text-2xl">Register with ZapShift</p>
      </div>

      {/* Form Here */}
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                {...register('name', { required: true })}
                className="input"
                placeholder="Name"
              />
              {errors.name?.type === 'required' && (
                <p className="text-red-500">Name is required</p>
              )}

              {/* Photo */}
              <label className="label">Name</label>
              <input
                type="file"
                {...register('photo', { required: true })}
                className="file-input"
                placeholder="Your Photo"
              />
              {errors.photo?.type === 'required' && (
                <p className="text-red-500">Photo is required</p>
              )}

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

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p className="py-2">
              Already have an account?{' '}
              <Link
                state={location?.state}
                to="/login"
                className="text-[#73863a] underline"
              >
                Login
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
