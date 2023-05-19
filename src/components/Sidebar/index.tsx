import React, { FC, useEffect } from 'react';
import { useStyles } from './styles';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from '../Flex-between';
import { navMenu } from '../../common/mocks/navigate';
import Logo from '../../assets/images/logo.svg';
import { ISidebarProps } from '../../common/types/sidebar';

const SideBar: FC<ISidebarProps> = (props: ISidebarProps): JSX.Element => {
  const [active, setActive] = React.useState('');
  const { isNonMobile, drowerWidth, isOpen, setIsOpen } = props;
  const classes = useStyles();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  const renderNavMenu = navMenu.map((item): JSX.Element => {
    return (
      <ListItem key={item.id}>
        <ListItemButton
          onClick={() => navigate(item.path)}
          className={
            active === item.path
              ? `${classes.navItem} ${classes.active}`
              : classes.navItem
          }
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
