import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/Router/PrivateRoute';
import AuthRootComponent from './components/Auth';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LayoutComponent from './components/Layout';
import Watchlist from './components/Watchlist';
import News from './components/News';
import Settings from './components/Settings';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className='App'>
          <Routes>
            <Route element={<LayoutComponent />}>
              <Route element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
                <Route path='watchlist' element={<Watchlist />} />
                <Route path='news' element={<News />} />
                <Route path='settings' element={<Settings />} />
              </Route>
              <Route path='login' element={<AuthRootComponent />} />
              <Route path='register' element={<AuthRootComponent />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
