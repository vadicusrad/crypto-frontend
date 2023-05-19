import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    brand: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '30px 15px',
      cursor: 'pointer',
    },
    brandTitle: {
      color: `${
        theme.palette.mode === 'dark'
          ? colors.white.DEFAULT
          : colors.black.DEFAULT
      }`,
      fontWeight: 'bold',
    },
    navBlock: {
      borderBottom: `1px solid ${colors.borderColor}`,
      width: '100%',
    },
    navList: {
      marginBottom: '55px',
    },
    navItem: {
      '&:hover': {
        color: '#fff',
        backgroundColor: '#1900D5 !important',
        borderRadius: '4px',
        '& .MuiSvgIcon-root': {
          color: colors.white.DEFAULT,
        },
      },
    },
    active: {
      color: '#fff !important',
      backgroundColor: '#1900D5 !important',
      borderRadius: '4px !important',
      '& .MuiSvgIcon-root': {
        color: colors.white.DEFAULT,
      },
    },
  };
});
