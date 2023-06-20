import { Theme } from '@mui/material';
import { tokens } from '../../theme';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      padding: 32,
    },
    tabsWrapper: {
      borderBottom: `1px solid ${colors.borderColor}`,
    },
  };
});
