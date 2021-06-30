import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import RegisterUser from './pages/RegisterUser'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Home,
        Register,
        RegisterUser,
        Profile,
        Favorites
    })
  );
  
  export default Routes;