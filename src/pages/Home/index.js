import React from 'react';
import { View,Text } from 'react-native';
import { ScrollView,SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBar from '../../components/NavBar';

export default function Home({navigation}){

    return (
        <>  
            <SafeAreaView>
        <HeaderBar></HeaderBar>
              <ScrollView>
                <Text>
                  Eu sou gostosa
                </Text>
              </ScrollView>
            </SafeAreaView>
            <NavBar navigation={navigation}/>
        </>
      );
}
