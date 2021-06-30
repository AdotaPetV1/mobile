import React from 'react';
import { TextInput } from 'react-native';
import { ScrollView, SafeAreaView } from '../../theme/LayoutStyles';
import HeaderBar from '../../components/HeaderBar'
import NavBarRegister from '../../components/NavBarBackToRegister';
import {TextInputLabel, Button, TextButton} from "./style"; 

export default function RegisterOng({navigation}){

	const [name, onChangeName] = React.useState(null);
  const [cnpj, onChangeCnpj] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [contato, onChangeContato] = React.useState(null);
  const [endereco, onChangeEndereco] = React.useState(null);
  const [site, onChangeSite] = React.useState(null);
  const [municipio, onChangeMunicipio] = React.useState(null);
  const [uf, onChangeUf] = React.useState(null);
  const [cep, onChangeCep] = React.useState(null);

    return (
        <>  
          <SafeAreaView>
            <HeaderBar headerName="Cadastro Organização"/>
            <ScrollView>
              <TextInputLabel>
                <TextInput  value={name}
                onChangeText={onChangeName}
                placeholder="Nome"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={cnpj}
                onChangeText={onChangeCnpj}
                placeholder="CNPJ"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={email}
                onChangeText={onChangeEmail}
                placeholder="E-mail"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={contato}
                keyboardType={'phone-pad'}
                onChangeText={onChangeContato}
                placeholder="Contato"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={endereco}
                onChangeText={onChangeEndereco}
                placeholder="Endereço"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={site}
                onChangeText={onChangeSite}
                placeholder="Site"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={municipio}
                onChangeText={onChangeMunicipio}
                placeholder="Municipio"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={uf}
                onChangeText={onChangeUf}
                placeholder="UF"/>
            </TextInputLabel>
            <TextInputLabel>
                <TextInput  value={cep}
                onChangeText={onChangeCep}
                placeholder="CEP"/>
            </TextInputLabel>
            <Button>
			        <TextButton>Continuar</TextButton>
		        </Button>
            </ScrollView>
          </SafeAreaView>
          <NavBarRegister navigation={navigation}/>
        </>
      );
}
