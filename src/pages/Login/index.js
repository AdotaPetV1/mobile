import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button, TextButton } from './style';
import { Container } from '../../theme/LayoutStyles';
import Teste from '../../components/Text';

export default function Login({navigation}){

    function onClickButton(){
        navigation.navigate('Register');
    }

    return(
        <Container>
            <Teste />
            <Text>Login funcionando!</Text>
            <Button onPress={onClickButton}>
                <TextButton>123456</TextButton>
            </Button>
        </Container>
    )
}