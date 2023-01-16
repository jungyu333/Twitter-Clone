import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from 'Routes/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
