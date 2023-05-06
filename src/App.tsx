import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/Router/PrivateRoute';
import AuthRootComponent from './components/Auth';


function App() {
  return (
    <div className="App">

    <Routes>
      <Route element={<PrivateRoute />} >
         <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="login" element={<AuthRootComponent/>} />
      <Route path="register" element={<AuthRootComponent/>} />
    </Routes>
    </div>
  );
}

export default App;
