import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from 'Routes/Main';
import Home from 'Routes/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
