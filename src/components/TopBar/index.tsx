import {
  AppBar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useContext } from 'react';
import { useAppSelector } from '../../utils/hook';
import { ColorModeContext } from '../../theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useStyles } from './styles';
import FlexBetween from '../Flex-between';
const TopBar = ({ isOpen, setIsOpen }: any) => {
  const theme = useTheme();
  const colorMode: any = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar}>
        <FlexBetween>
          <MenuOutlinedIcon
            className={classes.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
            fontSize='large'
          />
          <Typography variant='h3'>Welcome, Alex</Typography>
        </FlexBetween>
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
      </Toolbar>
    </AppBar>
    // <Box className={classes.root}>
    //   <Grid>Welcome, Alex </Grid>
    //   <Box className={classes.navWrapper}>
    //     <Grid className={classes.iconBlock}>
    //       <IconButton
    //         onClick={colorMode.toggleColorMode}
    //         className={classes.themeIcon}
    //       >
    //         {theme.palette.mode === 'dark' ? (
    //           <DarkModeIcon />
    //         ) : (
    //           <LightModeIcon />
    //         )}
    //       </IconButton>
    //       <IconButton>
    //         <NotificationsNoneIcon />
    //       </IconButton>
    //     </Grid>
    //     <Grid className={classes.searchBlock}>
    //       <IconButton className={classes.searchIcon}>
    //         <SearchIcon />
    //       </IconButton>
    //       <InputBase className={classes.searchInput} placeholder='Поиск...' />
    //     </Grid>
    //   </Box>
    // </Box>
  );
};

export default TopBar;
