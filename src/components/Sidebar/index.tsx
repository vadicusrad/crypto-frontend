import React, { useEffect } from 'react';
import { useStyles } from './styles';
import {
  Drawer,
  Divider,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  IconButton,
  Typography,
  useTheme,
  colors,
} from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../Flex-between';
import { navMenu } from '../../common/mocks/navigate';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { tokens } from '../../theme';
import Logo from '../../assets/images/logo.svg';

const SideBar = (props: any) => {
  const [active, setActive] = React.useState('');
  const { isNonMobile, drowerWidth, isOpen, setIsOpen } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const renderNavMenu = navMenu.map((item): JSX.Element => {
    return (
      <ListItem key={item.id}>
        <ListItemButton
          onClick={() => navigate(item.path)}
          className={classes.navItem}
        >
          <ListItemIcon>
            <item.icon />
          </ListItemIcon>
          <ListItemText>
            <Typography>{item.name}</Typography>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  });

  return (
    <Box component={'nav'}>
      {isOpen && (
        <Drawer
          anchor='left'
          open={isOpen}
          onClose={() => setIsOpen(false)}
          variant='persistent'
          sx={{
            width: drowerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.primary.main,
              boxSizing: 'border-box',
              width: drowerWidth,
            },
          }}
        >
          <Box className={classes.navBlock}>
            <Box>
              <FlexBetween>
                <Box className={classes.brand}>
                  <img src={Logo} alt='logo' />
                  <Typography variant='h1' className={classes.brandTitle}>
                    Demo
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsOpen(!isOpen)}>
                    <ChevronLeftOutlinedIcon />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List className={classes.navList}>{renderNavMenu}</List>
          </Box>
          <Box width='100%'>
            <List>
              <ListItem>
                <ListItemButton className={classes.navItem}>
                  <ListItemIcon>
                    <LogoutOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography>Logout</Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SideBar;
