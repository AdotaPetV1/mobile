import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import RegisterUser from './pages/RegisterUser'
import RegisterOng from './pages/RegisterOng';
import RegisterPassword from './pages/RegisterPassword';
import AdotaDog from './pages/AdotaDog';
import AdotaCat from './pages/AdotaCat';
import ForgetPassword from './pages/ForgetPassword';
import ForgetPasswordToken from './pages/ForgetPasswordToken';
import ForgetPasswordRepeat from './pages/ForgetPasswordRepeat';
import PerfilDog from './pages/PerfilDog';
import PerfilCat from './pages/PerfilCat';
import RegisterPet from './pages/RegisterPet';

const Routes = createAppContainer(
    createSwitchNavigator({
        RegisterPet,
        Login,
        Home,
        Register,
        RegisterUser,
        RegisterOng,
        RegisterPassword,
        ForgetPassword,
        ForgetPasswordToken,
        ForgetPasswordRepeat,
        AdotaDog,
        PerfilDog,
        PerfilCat,
        AdotaCat,
        Profile,
        Favorites
    })
  );
  
  export default Routes;