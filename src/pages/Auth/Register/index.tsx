import { TextField, Typography } from '@mui/material';
import React from 'react';
import { IPropsRegister } from '../../../common/types/auth';
import { useStyles } from '../styles';
import AppButton from '../../../components/AppButton';
import AppLoadingButton from '../../../components/LoadingButton';

const RegisterPage: React.FC<IPropsRegister> = ({
  register,
  errors,
  navigate,
  loading,
}: IPropsRegister): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h2' textAlign={'center'} fontSize={32}>
        Регистрация
      </Typography>
      <Typography variant='body1' marginBottom={3} textAlign={'center'}>
        Введите данные для регистрации
      </Typography>
      <TextField
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Введите ваш емейл'
        type='email'
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email ? `${errors.email.message}` : ''}
      />
      <TextField
        fullWidth={true}
        margin='normal'
        label='Имя'
        variant='outlined'
        placeholder='Введите ваше имя'
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={errors.firstName ? `${errors.firstName.message}` : ''}
      />
      <TextField
        fullWidth={true}
        margin='normal'
        label='Username'
        variant='outlined'
        placeholder='Введите ваш username'
        {...register('userName')}
        error={!!errors.userName}
        helperText={errors.userName ? `${errors.userName.message}` : ''}
      />
      <TextField
        type='password'
        fullWidth={true}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Введите ваш пароль'
        {...register('password')}
        error={errors.password ? true : false}
        helperText={errors.password ? `${errors.password.message}` : ''}
      />
      <TextField
        type='password'
        fullWidth={true}
        margin='normal'
        label='Password'
        variant='outlined'
        placeholder='Повторите ваш пароль'
        {...register('confirmPassword')}
        error={errors.confirmPassword ? true : false}
        helperText={
          errors.confirmPassword ? `${errors.confirmPassword.message}` : ''
        }
      />
      <AppLoadingButton
        loading={loading}
        type='submit'
        sx={{
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
        variant='contained'
      >
        Регистрация
      </AppLoadingButton>
      <Typography variant='body1'>
        У вас есть аккаунт?{' '}
        <span
          className={classes.incitingText}
          onClick={() => navigate('/login')}
        >
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
