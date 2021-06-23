import React from 'react';
import { Image } from 'react-native';
import { View, Text, Container } from './style';

export default function NavBarHome (props){

    const navigation = props.navigation;

    function GoToHome(){
        navigation.navigate('Home');
    }

    return(
        <View>
            <Container onPress={GoToHome}>
                <Image 
                    style={{ width:30, height:30, marginLeft:5, marginBottom: 8, marginTop: 6 }}            
                    source={require('../../../assets/icons/home.png')} 
                />
                <Text>Início</Text>
            </Container>
        </View>
    )
}