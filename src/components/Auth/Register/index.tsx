import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = ({
  register,
  errors,
  navigate,
}: IPropsRegister): JSX.Element => {
  return (
    <>
      <Typography variant='h2' fontFamily={'Poppins'} textAlign={'center'}>
        Регистрация
      </Typography>
      <Typography
        variant='body1'
        marginBottom={3}
        fontFamily={'Poppins'}
        textAlign={'center'}
      >
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
        Регистрация
      </Button>
      <Typography variant='body1' sx={{ fontFamily: 'Poppins' }}>
        У вас есть аккаунт?{' '}
        <span className='incitingText' onClick={() => navigate('/login')}>
          Авторизация
        </span>
      </Typography>
    </>
  );
};

export default RegisterPage;
