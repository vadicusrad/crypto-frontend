import { Grid, IconButton, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useStyles } from './styles';
import { ColorModeContext } from '../../theme';
const ThemeSwitcher = () => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Grid className={classes.iconBlock}>
      <IconButton
        onClick={colorMode.toggleColorMode}
        className={classes.themeIcon}
      >
        {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
      <IconButton>
        <NotificationsNoneIcon />
      </IconButton>
    </Grid>
  );
};

export default ThemeSwitcher;
