import React from 'react';
import HalfAuth from './layouts/HalfAuth';
import Login from './components/auth/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HalfAuth fComponent={Login} />} />
      <Route path="/signup" element={<HalfAuth fComponent={SignUp} />} />
    </Routes>
  );
}

export default App;
