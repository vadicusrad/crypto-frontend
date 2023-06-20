import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../../components/TabPanel';
import { tabProps } from '../../utils/helpers';
import { Grid, useTheme } from '@mui/material';
import { useStyles } from './styles';
import { tokens } from '../../theme';
import SettingsPersonalInfo from '../../components/settings-personal-info';
import { useAppDispatch } from '../../utils/hook';
import { getPublicUser } from '../../store/thunks/auth';
import ChangePassword from '../../components/change-password';

const SettingsPage = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPublicUser());
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid className={classes.root}>
      <Box className={classes.tabsWrapper}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='Settings tabs'
          centered
          textColor='secondary'
          TabIndicatorProps={{
            style: { backgroundColor: colors.blue },
          }}
        >
          <Tab label='Персональные данные' {...tabProps(0)} />
          <Tab label='Изменить пароль' {...tabProps(1)} />
          <Tab label='Удалить аккаунт' {...tabProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <SettingsPersonalInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePassword />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Grid>
  );
};

export default SettingsPage;
