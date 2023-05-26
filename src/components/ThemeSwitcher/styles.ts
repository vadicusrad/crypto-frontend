import { Theme, colors } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      background: `${colors.primary.DEFAULT} !important`,
      borderBottom: `1px solid ${colors.borderColor}`,
      boxShadow: 'none !important',
    },
    toolbar: {
      justifyContent: 'space-between',
      padding: '24px 48px',
    },

    navWrapper: {
      display: 'flex',
      alignItems: 'center',
    },
    iconBlock: {
      paddingRight: '37px',
      // borderRight: `1px solid ${colors.borderColor}`,
      cursor: 'pointer',
    },
    menuIcon: {
      cursor: 'pointer',
      marginRight: '24px',
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
      maxHeight: '48px',
    },
    themeIcon: {
      marginRight: '45px',
    },
  };
});
