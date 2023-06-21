import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';
import { useAppDispatch } from '../../utils/hook';
import { deleteUser } from '../../store/thunks/auth';
import { useStyles } from './styles';
import { tokens } from '../../theme';
import { useNavigate } from 'react-router-dom';

const DeleteUser: FC = (): JSX.Element => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(deleteUser());
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    navigate('/login');
  };
  return (
    <Grid container className={classes.root}>
      <Grid item className={classes.tabHeading}>
        <Typography variant='h2'>Удаление аккаунта</Typography>
      </Grid>
      <Grid item className={classes.alertMessage}>
        <Typography variant='body1'>
          Уважаемый пользователь, удаляя свой аккаунт, вы удаляете все свои
          персональные данные. После удаления информация будут недоступна
        </Typography>
      </Grid>
      <Grid item className={classes.checkBoxBlock}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={(e) => setChecked(!checked)}
                value={checked}
                sx={{
                  color: colors.blue,
                  '&.Mui-checked': {
                    color: colors.blue,
                  },
                }}
              />
            }
            label='Я понимаю'
          />
        </FormGroup>
      </Grid>
      <Grid item className={classes.buttonBlock}>
        <Button
          disabled={!checked}
          className={classes.deleteButton}
          color='error'
          variant='contained'
          onClick={handleDelete}
        >
          Удалить аккаунт
        </Button>
      </Grid>
    </Grid>
  );
};

export default DeleteUser;
