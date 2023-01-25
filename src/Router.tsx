import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from 'Routes/Main';
import Home from 'Routes/Home';
import LogIn from 'Routes/LogIn';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
