import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { IPropsRegister } from '../../../common/types/auth'

const RegisterPage: React.FC<IPropsRegister> = ({ setFirstName, setUserName, setRepeatPassword, setEmail, setPassword, navigate }: IPropsRegister): JSX.Element => {
  return (
    <>
      <Typography variant="h2" fontFamily={'Poppins'} textAlign={'center'} >Регистрация</Typography>
      <Typography variant="body1" marginBottom={3} fontFamily={'Poppins'} textAlign={'center'} >Введите данные для регистрации</Typography>
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш емейл' onChange={e => setEmail(e.target.value)} />
      <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder='Введите ваше имя' onChange={e => setFirstName(e.target.value)} />
      <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Введите ваш username' onChange={e => setUserName(e.target.value)} />
      <TextField type="password" fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль' onChange={e => setPassword(e.target.value)} />
      <TextField type="password" fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Повторите ваш пароль' onChange={e => setRepeatPassword(e.target.value)} />
      <Button type='submit' sx={{ fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '60%' }} variant="contained">Регистрация</Button>
      <Typography variant="body1" sx={{ fontFamily: 'Poppins' }}  >У вас есть аккаунт? <span className='incitingText' onClick={() => navigate('/login')} >Авторизация</span></Typography>
    </>
  )
}

export default RegisterPage