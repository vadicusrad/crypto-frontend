import { Box, Grid, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { useAppSelector } from '../../utils/hook';
import { ColorModeContext } from '../../theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './styles';
const TopBar = () => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid>Welcome, Alex </Grid>
      <Box className={classes.navWrapper}>
        <Grid className={classes.iconBlock}>
          <IconButton
            onClick={colorMode.toggleColorMode}
            className={classes.themeIcon}
          >
            {theme.palette.mode === 'dark' ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
        </Grid>
        <Grid className={classes.searchBlock}>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
          <InputBase className={classes.searchInput} placeholder='Поиск...' />
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBar;
