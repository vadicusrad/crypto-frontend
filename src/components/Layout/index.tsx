import React from 'react';
import { ILayout } from '../../common/types/layout';
import TopBar from '../TopBar';
import { useLocation } from 'react-router-dom';
import { Box, useMediaQuery } from '@mui/material';
import SideBar from '../Sidebar';
import { useStyles } from './styles';

const LayoutComponent = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const location = useLocation();
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return location.pathname === '/login' || location.pathname === '/register' ? (
    <>{children}</>
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
          <TopBar />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default LayoutComponent;
