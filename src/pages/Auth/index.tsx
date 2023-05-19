import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './Login';
import RegisterPage from './Register';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../utils/hook';
import { LoginSchema } from '../../utils/yup';
import { instance } from '../../utils/axios';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';
import { useStyles } from './styles';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      location.pathname === '/login' ? LoginSchema : LoginSchema
    ),
  });

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
      if (data.password === data.confirmPassword) {
        try {
          const userData = {
            firstName: data.firstName,
            userName: data.userName,
            email: data.email,
            password: data.password,
          };
          const newUser = await instance.post('auth/register', userData);
          await dispatch(login(newUser.data));
          navigate('/');
        } catch (error) {
          return error;
        }
      } else {
        throw new Error(AppErrors.PasswordDoNotMatch);
      }
    }
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit(handleSubmitForm)} className={classes.form}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'-3px -2px 20px 1px #202020'}
        >
          {location.pathname === '/login' ? (
            <LoginPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : location.pathname === '/register' ? (
            <RegisterPage
              navigate={navigate}
              register={register}
              errors={errors}
            />
          ) : null}
        </Box>
      </form>
    </div>
  );
};
export default AuthRootComponent;
