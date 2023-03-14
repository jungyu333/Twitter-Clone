import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from 'Routes/Main';
import Home from 'Routes/Home';
import LogIn from 'Routes/LogIn';
import LogOut from 'Routes/LogOut';
import PrivateRoute from 'Routes/PrivateRoute';
import TweetDetail from 'Routes/TweetDetail';
import NavigationBar from 'components/common/NavigationBar';

function Router() {
  return (
    <BrowserRouter>
      <NavigationBar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="/login" element={<LogIn />} />

          <Route element={<PrivateRoute />}>
            <Route path="/logout" element={<LogOut />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/tweet/:id" element={<TweetDetail />} />
          </Route>
        </Routes>
      </NavigationBar>
    </BrowserRouter>
  );
}

export default Router;
