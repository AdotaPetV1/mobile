import React from 'react';
import { TextInput, Image} from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBarRegister from '../../components/NavBarBackToRegister';
import {TextInputLabel, Button, TextButton, Icon} from "./style"; 

export default function ForgetPassword ({navigation}){

	const [password, onChangePassword] = React.useState(null);

  const renderIcon = () => (
		<Icon>
			<Image source={require("../../../assets/adotapet-icon.png")}/> 
		</Icon>
    );
  


    function onClickButtonHome(){
      navigation.navigate("ForgetPasswordToken");
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
                placeholder="Digite seu e-mail"/>
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
