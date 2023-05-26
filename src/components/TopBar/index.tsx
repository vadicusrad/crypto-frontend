import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useStyles } from './styles';
import FlexBetween from '../Flex-between';
import { ITopBarProps } from '../../common/types/topBar';
import ThemeSwitcher from '../ThemeSwitcher';
import SearchBar from '../SearchBar';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const TopBar: FC<ITopBarProps> = ({
  isOpen,
  setIsOpen,
  isNonMobile,
}: ITopBarProps): JSX.Element => {
  const classes = useStyles();
  const name = sessionStorage.getItem('name');
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar className={classes.toolbar}>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item sm={3} lg={3}>
            <FlexBetween>
              <MenuOutlinedIcon
                className={classes.menuIcon}
                onClick={() => setIsOpen(!isOpen)}
                fontSize='large'
              />
              <Typography variant='h3'>Welcome, {name}</Typography>
            </FlexBetween>
          </Grid>
          {isNonMobile && (
            <Grid item sm={9} lg={9} display='flex' justifyContent='flex-end'>
              <Grid item className={classes.navWrapper}>
                <ThemeSwitcher />
                <SearchBar />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
