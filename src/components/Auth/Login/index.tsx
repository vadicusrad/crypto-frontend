import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = ({
  navigate,
  register,
  errors,
}: IPropsLogin): JSX.Element => {
  return (
    <>
      <Typography variant='h2' fontFamily={'Poppins'} textAlign={'center'}>
        Авторизация
      </Typography>
      <Typography
        variant='body1'
        marginBottom={3}
        fontFamily={'Poppins'}
        textAlign={'center'}
      >
        Введите ваш логин и пароль
      </Typography>
      <TextField
        fullWidth={true}
        margin='normal'
        label='Email'
        variant='outlined'
        placeholder='Введите ваш емейл'
        {...register('email', {
          required: 'Это обязательное поле',
          pattern:
            /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        })}
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
        {...register('password', {
          required: 'Это обязательное поле',
          minLength: 6,
        })}
        error={errors.password ? true : false}
        helperText={errors.password ? `${errors.password.message}` : ''}
      />
      <Button
        type='submit'
        sx={{
          fontFamily: 'Poppins',
          marginTop: 2,
          marginBottom: 2,
          width: '60%',
        }}
        variant='contained'
      >
        Войти
      </Button>
      <Typography variant='body1' sx={{ fontFamily: 'Poppins' }}>
        У вас нет аккаунта?{' '}
        <span className='incitingText' onClick={() => navigate('/register')}>
          Регистрация
        </span>
      </Typography>
    </>
  );
};

export default LoginPage;
