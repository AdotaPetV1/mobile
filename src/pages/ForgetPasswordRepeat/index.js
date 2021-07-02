import React from 'react';
import { TextInput, Image} from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBarRegister from '../../components/NavBarBackToRegister';
import {TextInputLabel, Button, TextButton, Icon} from "./style"; 

export default function ForgetPasswordRepeat ({navigation}){

	const [password, onChangePassword] = React.useState(null);
	const [passwordRepeat, onChangePasswordRepeat] = React.useState(null);

  const renderIcon = () => (
		<Icon>
			<Image source={require("../../../assets/adotapet-icon.png")}/> 
		</Icon>
    );
  
    function onClickButtonHome(){
      navigation.navigate("");
    }

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Esqueci a senha"/>
            {renderIcon()}
            <ScrollView>
              <TextInputLabel>
                <TextInput  value={password}
                secureTextEntry={true}
                onChangeText={onChangePassword}
                placeholder="Digite sua nova senha"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={passwordRepeat}
                secureTextEntry={true}
                onChangeText={onChangePasswordRepeat}
                placeholder="Repita sua nova senha"/>
            </TextInputLabel>
            <Button onPress={onClickButtonHome}>
			        <TextButton>Continuar</TextButton>
		        </Button>
            </ScrollView>
          </SafeAreaView>
          <NavBarRegister navigation={navigation}/>
        </>
      );
}
