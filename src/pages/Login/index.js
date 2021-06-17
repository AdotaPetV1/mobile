import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, CheckBox} from 'react-native';
import { Button, TextButton, Icon, TextInputEmail, TextInputPassword, CheckBoxLogin, TextPasswordSave, TextForgetPassword, 
    ButtonGhost, TextQuestion, ViewCreateAccount, TextCreateAccount} from './style';
import { Container } from '../../theme/LayoutStyles';


export default function Login({navigation}){

    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [isSelected, setSelection] = useState(false);

    function onClickButton(){
        navigation.navigate('Register');
    }

    return(
        <Container>
            <Icon>
            <Image
                source={require('../../../assets/adotapet-icon.png')}/>
            </Icon>
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
            <CheckBoxLogin>
            <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            />
            <TextPasswordSave>Salvar senha</TextPasswordSave>
            <ButtonGhost>

            <TextForgetPassword>Esqueceu a senha</TextForgetPassword>
            </ButtonGhost>
            </CheckBoxLogin>
            <Button onPress={onClickButton}>
                <TextButton>Login</TextButton>
            </Button>
            <ViewCreateAccount>
            <TextQuestion>Não possui conta?</TextQuestion>
            <ButtonGhost>
            <TextCreateAccount>Registre-se agora</TextCreateAccount>
            </ButtonGhost>
            </ViewCreateAccount>
        </Container>
    )
}