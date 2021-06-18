import React from 'react';
import { View,Text } from 'react-native';
import { ScrollView,SafeAreaView } from '../../theme/LayoutStyles';

import NavBar from '../../components/NavBar';

export default function Home({navigation}){

    return (
        <>
            <SafeAreaView>
              <ScrollView>
                <Text>
                    Profile
                </Text>
              </ScrollView>
            </SafeAreaView>
            <NavBar navigation={navigation}/>
        </>
      );
}
