import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './Login';
import RegisterPage from './Register';
import './style.scss';
import { Box } from '@mui/material';

import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';
import { useForm, SubmitHandler } from 'react-hook-form';
import { log } from 'console';
const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [userName, setUserName] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log('====================================');
  console.log('errors ===', errors);
  console.log('====================================');
  const handleSubmitForm = async (data: any) => {
    console.log('data=== ', data);
    if (location.pathname === '/login') {
      try {
        const userData = {
          email: data.email,
          password: data.password,
        };
        const user = await instance.post('auth/login', userData);
        await dispatch(login(user.data));
        navigate('/');
      } catch (error) {
        return error;
      }
    } else {
      if (password === repeatPassword) {
        try {
          const userData = {
            firstName,
            userName,
            email,
            password,
          };
          const newUser = await instance.post('auth/register', userData);
          await dispatch(login(newUser.data));
          navigate('/');
        } catch (error) {
          console.log('====================================');
          console.log(error);
          console.log('====================================');
          return error;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className='root'>
      <form onSubmit={handleSubmit(handleSubmitForm)} className='form'>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              setEmail={setEmail}
              setPassword={setPassword}
              setFirstName={setFirstName}
              setUserName={setUserName}
              setRepeatPassword={setRepeatPassword}
              navigate={navigate}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};
export default AuthRootComponent;
