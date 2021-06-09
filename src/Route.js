import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Register
    })
  );
  
  export default Routes;