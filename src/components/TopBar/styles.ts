import { Theme, colors } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '32px 24px',
      backgroundColor: colors.primary.DEFAULT,
      maxHeight: '95px',
      borderBottom: `1px solid ${colors.borderColor}`,
    },
    navWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    iconBlock: {
      paddingRight: '37px',
      borderRight: `1px solid ${colors.borderColor}`,
      cursor: 'pointer',
    },
    searchIcon: {
      '&:hover': {
        backgroundColor: 'transparent !important',
      },
    },
    searchInput: {
      padding: '18px 12px',
    },
    searchBlock: {
      display: 'flex',
      backgroundColor: `${colors.primary[600]}`,
      borderRadius: '8px',
      marginLeft: '20px',
    },
    themeIcon: {
      marginRight: '45px',
    },
  };
});
