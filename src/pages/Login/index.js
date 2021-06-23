import React, { useState } from "react";
import { Image, TextInput, CheckBox} from "react-native"; /* Tags nativas */
import { Button, TextButton, Icon, TextInputEmail, TextInputPassword, CheckBoxLogin, TextPasswordSave, TextForgetPassword, 
	ButtonGhost, TextQuestion, ViewCreateAccount, TextCreateAccount} from "./style"; /* Tags criadas */
import { Container } from "../../theme/LayoutStyles"; /* Tags criada global */
import HeaderBar from '../../components/HeaderBar';

export default function Login({navigation}){

	const [text, onChangeText] = React.useState(null);
	const [password, onChangePassword] = React.useState(null);
	const [isSelected, setSelection] = useState(false);

	function onClickButtonLogin(){
		navigation.navigate("Home");
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

	return(
		<Container>
            {renderIcon()}
            {renderLabelsLogin()}
			{renderCheckbox()}
			{renderButtonLogin()}
			{renderCreateAccount()}
		</Container>
	);
}