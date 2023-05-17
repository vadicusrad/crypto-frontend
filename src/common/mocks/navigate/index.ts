import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { HomeOutlined } from '@mui/icons-material';

export const navMenu = [
  {
    id: 0,
    name: 'Главная',
    icon: HomeOutlinedIcon,
    path: '/',
  },
  {
    id: 1,
    name: 'Избранное',
    icon: AutoGraphOutlinedIcon,
    path: '/watchlist',
  },
  {
    id: 2,
    name: 'Новости',
    icon: MenuBookOutlinedIcon,
    path: '/news',
  },
  {
    id: 3,
    name: 'Настройки',
    icon: SettingsOutlinedIcon,
    path: '/settings',
  },
  // {
  //   id: 0,
  //   name: 'Главная',
  //   icon: <HomeOutlinedIcon />,
  //   path: '/',
  // },
  // {
  //   id: 1,
  //   name: 'Избранное',
  //   icon: <AutoGraphOutlinedIcon />,
  //   path: '/watchlist',
  // },
  // {
  //   id: 2,
  //   name: 'Новости',
  //   icon: <MenuBookOutlinedIcon />,
  //   path: '/news',
  // },
  // {
  //   id: 3,
  //   name: 'Настройки',
  //   icon: <SettingsOutlinedIcon />,
  //   path: '/settings',
  // },
];
