import React, { useState } from "react";
import { Image, TextInput, CheckBox} from "react-native"; /* Tags nativas */
import { Button, TextButton, Icon, TextInputEmail, TextInputPassword, CheckBoxLogin, TextPasswordSave, TextForgetPassword, 
	ButtonGhost, TextQuestion, ViewCreateAccount, TextCreateAccount, Error} from "./style"; /* Tags criadas */
import { Container } from "../../theme/LayoutStyles"; /* Tags criada global */
import AsyncStorage from '@react-native-async-storage/async-storage';
import api  from '../../services/api';

export default function Login({navigation}){

	const [text, onChangeText] = React.useState(null);
	const [password, onChangePassword] = React.useState(null);
	const [isSelected, setSelection] = useState(false);
    const [showError, setError] = useState(false);

	async function onClickButtonLogin(){
        
        try{

            const user = { 
                Email : text,
                Senha : password
            };

            const response = await api.post('/auth/login', user);

            if(response.status == 200){
                
                const result = response.data;
                await AsyncStorage.setItem('USER_TOKEN', JSON.stringify(result.data.token));
                await AsyncStorage.setItem('USER_DATA', JSON.stringify(result.data.user));

                navigation.navigate("Home");
            }else{
                setError(true);
            }

        }
        catch(err){
            setError(true);
        }

	}

    function onClickButtonRegister(){
		navigation.navigate("Register");
	}

    

    const renderIcon = () => (
		<Icon>
			<Image source={require("../../../assets/adotapet-icon.png")}/> 
		</Icon>
    );

    const renderLabelsLogin = () => (
    <>
        <TextInputEmail>
            <TextInput
            value={text}
            onChangeText={onChangeText}
            placeholder="E-mail"/>
         </TextInputEmail>
    	<TextInputPassword>
			<TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={onChangePassword}
                placeholder="Senha"/>
		</TextInputPassword>
    </>
    );

    const renderCheckbox = () => (
    <CheckBoxLogin>
         <CheckBox
            value={isSelected}
            onValueChange={setSelection}/>
        <TextPasswordSave>Salvar senha</TextPasswordSave>
        <ButtonGhost>
            <TextForgetPassword>Esqueceu a senha</TextForgetPassword>
        </ButtonGhost>
    </CheckBoxLogin>
    );

    const renderButtonLogin = () => (
        <Button onPress={onClickButtonLogin}>
			<TextButton>Login</TextButton>
		</Button>
    );

    const renderCreateAccount = () => (
        <ViewCreateAccount>
			<TextQuestion>Não possui conta?</TextQuestion>
			    <ButtonGhost onPress={onClickButtonRegister}
                >
				    <TextCreateAccount>Registre-se agora</TextCreateAccount>
			    </ButtonGhost>
		</ViewCreateAccount>
    );
    
    function renderErrorLogin (){
        if(showError)
            return(<Error>Usuário ou senha inválidos!</Error>)
        else
            return null;
    }

	return(
		<Container>
            {renderIcon()}
            {renderLabelsLogin()}
			{renderCheckbox()}
            {renderErrorLogin()}
			{renderButtonLogin()}
			{renderCreateAccount()}
		</Container>
	);
}