import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    priceDown: {
      color: '#FFA7A7 !important',
    },
    priceUp: {
      color: '#A9FFA7 !important',
    },
  };
});
