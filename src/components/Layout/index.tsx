import React, { useState } from 'react';
import TopBar from '../TopBar';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import SideBar from '../Sidebar';
import { useStyles } from './styles';

const LayoutComponent: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width:760px)');
  const classes = useStyles();

  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Box
        justifyContent={'space-between'}
        display={isNonMobile ? 'flex' : 'block'}
        width='100%'
        height='100%'
      >
        <SideBar
          isNonMobile={isNonMobile}
          drowerWidth='250px'
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Box className={classes.mainSection}>
          <TopBar
            isNonMobile={isNonMobile}
            drowerWidth='250px'
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default LayoutComponent;
