import React from 'react';
import { TextInput, Image} from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBarRegister from '../../components/NavBarBackToRegister';
import {TextInputLabel, Button, TextButton, Icon} from "./style"; 

export default function RegisterPassword ({navigation}){

	const [password, onChangePassword] = React.useState(null);
  const [repeatPassword, onChangeRepeat] = React.useState(null);

  const renderIcon = () => (
		<Icon>
			<Image source={require("../../../assets/adotapet-icon.png")}/> 
		</Icon>
    );
  
    function onClickButtonHome(){
      navigation.navigate("Login");
    }

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Senha"/>
            {renderIcon()}
            <ScrollView>
              <TextInputLabel>
                <TextInput  value={password}
                onChangeText={onChangePassword}
                placeholder="Digite uma senha"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={repeatPassword}
                onChangeText={onChangeRepeat}
                placeholder="Repita a senha"/>
            </TextInputLabel>
            <Button onPress={onClickButtonHome}>
			        <TextButton>Finalizar</TextButton>
		        </Button>
            </ScrollView>
          </SafeAreaView>
          <NavBarRegister navigation={navigation}/>
        </>
      );
}
