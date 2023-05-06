import React from 'react';
import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/Auth/Login';
import PrivateRoute from './utils/Router/PrivateRoute';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route element={<PrivateRoute />} >
         <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="login" element={<LoginPage/>} />
    </Routes>
    </div>
  );
}

export default App;
