import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { Box, Grid, TextField } from '@mui/material';
import { useStyles } from './styles';
import AppLoadingButton from '../loading-button';
import { getPublicUser, updateUserInfo } from '../../store/thunks/auth';

const SettingsPersonalInfo: FC = (): JSX.Element => {
  const classes = useStyles();
  const [userInfo, setUserInfo] = React.useState({
    name: '',
    email: '',
    username: '',
  });
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    user &&
      setUserInfo({
        name: user.firstName,
        email: user.email,
        username: user.username,
      });
  }, [user]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      username: userInfo.username,
      email: userInfo.email,
      firstName: userInfo.name,
    };

    dispatch(updateUserInfo(data));
    dispatch(getPublicUser());
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
          type='text'
          label='Имя'
          variant='outlined'
          value={userInfo.name}
          onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
        />
        <TextField
          className={classes.inputField}
          type='text'
          label='Username'
          variant='outlined'
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
        <TextField
          className={classes.inputField}
          type='text'
          label='email'
          variant='outlined'
          value={userInfo.email}
          onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <Box className={classes.buttonBlock}>
          <AppLoadingButton type='submit'>Сохранить</AppLoadingButton>
        </Box>
      </Box>
    </Grid>
  );
};

export default SettingsPersonalInfo;
