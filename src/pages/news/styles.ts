import { makeStyles } from '@mui/styles';
import { tokens } from '../../theme';
import { Theme } from '@mui/material';

export const useStyles = makeStyles((theme: Theme) => {
  const colors = tokens(theme.palette.mode);
  return {
    root: {
      padding: 32,
      '& a': {
        textDecoration: 'none',
        color: `${
          theme.palette.mode === 'light'
            ? colors.primary.DEFAULT
            : colors.white.DEFAULT
        }`,
      },
    },

    newsBlock: {
      backgroundColor: `${
        theme.palette.mode === 'light'
          ? colors.primary.DEFAULT
          : colors.primary[600]
      }`,
      padding: '20px 16px',
      minHeight: 270,
      border: `1px solid ${colors.borderColor}`,
      borderRadius: 12,
      '& .MuiPaper-root': {
        backgroundColor: 'transparent !important',
        boxShadow: 'none !important',
        backgroundImage: 'none !important',
      },
      marginBottom: 32,
    },
    readMore: {
      textAlign: 'center',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: 32,
    },
    newsTitle: {
      marginBottom: 32,
    },
  };
});
