import React from 'react';
import { Image } from 'react-native';
import { View, Text, Container } from './style';

export default function Footer(props){

    const navigation = props.navigation;

    function GoToHome(){
        navigation.navigate('Home');
    }

    function GoToFavorites(){
        navigation.navigate('Favorites');
    }

    function GoToProfile(){
        navigation.navigate('Profile');
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

            <Container onPress={GoToFavorites}>
                <Image 
                    style={{ width:30, height:28, marginLeft:17, marginBottom: 8, marginTop: 6 }}            
                    source={require('../../../assets/icons/heart.png')} 
                />
                <Text>Favoritos</Text>
            </Container>

            <Container onPress={GoToProfile}>
                <Image 
                    style={{ width:28, height:28, marginLeft:7, marginBottom: 8, marginTop: 6 }}            
                    source={require('../../../assets/icons/user.png')} 
                />
                <Text>Perfil</Text>
            </Container>

        </View>
    )
}