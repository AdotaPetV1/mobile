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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </ScrollView>
            </SafeAreaView>
            <NavBar navigation={navigation}/>
        </>
      );
}
