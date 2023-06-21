import { Box, Grid, TextField } from '@mui/material';
import React, { FC } from 'react';
import { useStyles } from './styles';
import AppLoadingButton from '../loading-button';
import { useAppDispatch } from '../../utils/hook';
import { updateUserPassord } from '../../store/thunks/auth';

const ChangePassword: FC = (): JSX.Element => {
  const [newPassword, setNewPassword] = React.useState('');
  const [oldPassword, setOldPassword] = React.useState('');
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      updateUserPassord({
        oldPassword,
        newPassword,
      })
    );
  };

  return (
    <Grid
      component='form'
      noValidate
      autoComplete='off'
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <Box className={classes.formWrapper}>
        <TextField
          className={classes.inputField}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          label='Старый пароль'
          variant='outlined'
          type='password'
        />
        <TextField
          className={classes.inputField}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          label='Новый пароль'
          variant='outlined'
          type='password'
        />
        <Box className={classes.buttonBlock}>
          <AppLoadingButton type='submit'>Изменить пароль</AppLoadingButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default ChangePassword;
