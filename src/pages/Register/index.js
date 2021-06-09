import React from 'react';
import { Text, Button, TextButton } from './style';

export default function Register(){

    function onClickButton(){
        navigation.navigate('Register');
    }

    return(
        <>
            <Text>Register Funcionando</Text>
        </>
    );
}