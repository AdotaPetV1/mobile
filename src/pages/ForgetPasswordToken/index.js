import React from 'react';
import { TextInput, Image} from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBarLogin from '../../components/NavBarBackToLogin';
import {TextInputLabel, Button, TextButton, Icon} from "./style"; 

export default function ForgetPasswordToken ({navigation}){

	const [password, onChangePassword] = React.useState(null);

  const renderIcon = () => (
		<Icon>
			<Image source={require("../../../assets/adotapet-icon.png")}/> 
		</Icon>
    );
  
    function onClickButtonHome(){
      navigation.navigate("ForgetPasswordRepeat");
    }

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Esqueci a senha"/>
            {renderIcon()}
            <ScrollView>
              <TextInputLabel>
                <TextInput  value={password}
                onChangeText={onChangePassword}
                placeholder="Digite o código de recuperação"/>
            </TextInputLabel>
            <Button onPress={onClickButtonHome}>
			        <TextButton>Continuar</TextButton>
		        </Button>
            </ScrollView>
          </SafeAreaView>
          <NavBarLogin navigation={navigation}/>
        </>
      );
}
