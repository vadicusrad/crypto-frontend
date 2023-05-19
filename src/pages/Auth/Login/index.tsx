import React from 'react';
import {  TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';
import { useStyles } from '../styles';
import AppButton from '../../../components/AppButton';

const LoginPage: React.FC<IPropsLogin> = ({
  navigate,
  register,
  errors,
}: IPropsLogin): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Typography variant='h2' textAlign={'center'} fontSize={32}>
        Авторизация
      </Typography>
      <Typography variant='body1' marginBottom={3} textAlign={'center'}>
        Введите ваш логин и пароль
      </Typography>
      <TextField
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Введите ваш емейл'
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email ? `${errors.email.message}` : ''}
        type='email'
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
      <AppButton
        type='submit'
        sx={{
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
        variant='contained'
      >
        Войти
      </AppButton>
      <Typography variant='body1'>
        У вас нет аккаунта?{' '}
        <span
          className={classes.incitingText}
          onClick={() => navigate('/register')}
        >
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
